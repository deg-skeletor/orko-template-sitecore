import React from 'react';
import Label from '../../basics/labels/label';
import TextInput from '../../basics/inputs/textInput';
import FieldErrorMessage from '../../basics/messages/fieldErrorMessage';

function TextInputField({
    id='text-input-1',
    name='text-input-1',
    value,
    pattern,
    maxLength,
    placeholder,
    type,
    isRequired=false,
    isDisabled=false,
    label='Text Input Field',
    isInvalid=false,
    size,
    errorMessage
}) {
    return (
        <div className="field">
            <Label inputId={id} isRequired={isRequired}>{label}</Label>
            <TextInput 
                id={id}
                name={name}
                value={value}
                maxLength={maxLength}
                pattern={pattern}
                placeholder={placeholder}
                type={type}
                isRequired={isRequired}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                size={size}
                ariaDescribedBy={isInvalid ? `${id}_error` : null}
            />
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null }            
        </div>
    );
}

export default TextInputField;