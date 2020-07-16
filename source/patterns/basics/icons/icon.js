import React from 'react';
import classnames from 'classnames';

function Icon({
    id, 
    cssClass
}) {
    const cssClasses = classnames('icon', cssClass);

    return (
        <svg className={cssClasses} aria-hidden="true" focusable="false">
            <use xlinkHref={`#${id}`} href={`#${id}`}></use>
        </svg>
    );
}

export default Icon;
