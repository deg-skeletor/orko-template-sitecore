import React from 'react';
import classnames from 'classnames';

function ErrorMessage({
    children='An unexpected error has occurred. Please try again.', 
    cssClass
}) {
    const cssClasses = classnames('error-message', cssClass);

    return <p className={cssClasses}>{children}</p>
}

export default ErrorMessage;