import React from 'react';
import classnames from 'classnames';

function FormErrorMessage({
    children='An unexpected error occurred. Please try again.', 
    id,
    cssClass,
    dataAttrs={}
}) {
    const cssClasses = classnames('form-message', 'error-message', cssClass);

    return (
        <div 
            id={id} 
            className={cssClasses} 
            {...dataAttrs}>
            {children}
        </div>
}

export default FormErrorMessage;