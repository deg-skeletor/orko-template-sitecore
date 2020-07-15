import React from 'react';
import classnames from 'classnames';

function Label({
    children, 
    cssClass,
    inputId,
    attrs={},
    isRequired
}) {
    const cssClasses = classnames('label', cssClass, {
        'label--required': isRequired
    });
    
    return (
        <label 
            htmlFor={inputId} 
            className={cssClasses} 
            {...attrs}>
            {children}
        </label>
    );
}

export default Label;