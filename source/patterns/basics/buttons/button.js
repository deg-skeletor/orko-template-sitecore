import React from 'react';
import classnames from 'classnames';

function Button({
    children,
    type='button',
    cssClass,
    isDisabled=false,
    attrs={}
}) {
    const cssClasses = classnames('button', cssClass);

    return (
        <button 
            className={cssClasses} 
            type={type} 
            disabled={isDisabled}
            {...attrs}>
            {children}
        </button>
    );
}

export default Button;