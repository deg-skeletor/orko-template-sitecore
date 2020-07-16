import React from 'react';
import Label from '../../basics/labels/label';
import TextArea from '../../basics/inputs/textArea';
import FieldErrorMessage from '../../basics/messages/fieldErrorMessage';

function TextAreaField({
    id='text-area',
    name='text-area',
    value,
    isRequired=false,
    isDisabled=false,
    isInvalid=false,
    label='Text Area Field',
    size,
    maxLength,
    errorMessage
}) {
    return (
        <div className="field">
            <Label inputId={id} isRequired={isRequired}>{label}</Label>
            <TextArea 
                id={id}
                name={name}
                value={value}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                maxLength = {maxLength}
                size={size}
                ariaDescribedBy={isInvalid ? `${id}_error` : null}
            />         
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null }    
        </div>
    );
}

export default TextAreaField;