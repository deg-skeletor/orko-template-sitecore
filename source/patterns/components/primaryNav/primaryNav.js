import React from 'react';
import defaultItems from './data.js';
import classnames from 'classnames';

function PrimaryNav({
    items=defaultItems,
    cssClass
}) {
    const cssClasses = classnames('nav', 'primary-nav', cssClass);

    return (
        <nav className={cssClasses} role="navigation" aria-label="Primary Navigation">
            <PrimaryNavList items={items} />
        </nav>
    );
}

function PrimaryNavList({items}) {
    return (
        items ?
            <ul className="nav__list primary-nav__list">
                {
                    items.map((item, index) => 
                        <PrimaryNavItem 
                            key={index} 
                            {...item} />
                    )
                }
            </ul> :
            null
    );
}

function PrimaryNavItem({
    label,
    url,
    items, 
    isCurrentPage
}) {
    const isParent = items && items.length > 0;

    const cssClasses = classnames('nav__item', 'primary-nav__item', {
        'primary-nav__item--parent': isParent
    });

    return (
        <li className={cssClasses}>
            {
                isParent ?
                    renderParent(label, items) :
                    renderLink(label, url, isCurrentPage)                    
            }            
        </li>
    );
}

function renderLink(label, url, isCurrentPage) {
    return (
        <a 
            className="nav__link primary-nav-link primary-nav-link--parent" 
            href={url}
            aria-current={isCurrentPage ? 'page' : undefined}>
            {label}
        </a>
    );
}

function renderParent(label, items) {
    return (
        <>
            <button type="button" className="nav__link primary-nav-link primary-nav-link--parent">
                {label}
            </button>
            <ul className="nav__list primary-nav__child-list">
                {
                    items.map((item, index) => <PrimaryNavItem key={index} {...item} />)
                }
            </ul>
        </>
    );
}

export default PrimaryNav;