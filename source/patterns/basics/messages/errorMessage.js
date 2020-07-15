import React from 'react';
import classnames from 'classnames';

function ErrorMessage({
    children='An unexpected error has occurred. Please try again.', 
    cssClass,
    dataAttrs={}
}) {
    const cssClasses = classnames('error-message', cssClass);

    return <p className={cssClasses} {...dataAttrs}>{children}</p>
}

export default ErrorMessage;