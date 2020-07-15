import React from 'react';

function FieldErrorMessage({
    children='This field is invalid.', 
    id
}) {
    return <div id={id} className="field__error-message error-message">{children}</div>
}

export default FieldErrorMessage;