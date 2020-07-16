import React from 'react';
import logoImage from '../../../images/logo.png';
import classnames from 'classnames';

function Logo({
    cssClass
}) {
    const cssClasses = classnames('logo', cssClass);

    return (
        <img 
            className={cssClasses}
            src={logoImage} 
            alt="Logo"                 
        />
    );
}

export default Logo;