import React from 'react';
import classnames from 'classnames';

function ButtonLink({
    children,
    href='',
    cssClass
}) {
    const cssClasses = classnames('button', cssClass);

    return <a href={href} className={cssClasses}>{children}</a>;
}

export default ButtonLink;