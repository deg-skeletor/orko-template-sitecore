import React from 'react';
import Label from '../../basics/labels/label';
import RadioButton from '../../basics/inputs/radioButton';
import FieldErrorMessage from '../../basics/messages/fieldErrorMessage';

function RadioButtonField({
    id='radio',
    name='radio',
    value,
    isRequired=false,
    isChecked=false,
    isDisabled=false,
    label='Radio Button Field',
    isInvalid=false,
    errorMessage
}) {
    return (
        <div className="field field--radio">
            <div className="field__input-label-wrap">
                <RadioButton 
                    id={id}
                    name={name}
                    value={value}
                    isChecked={isChecked}
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                    ariaDescribedBy={isInvalid ? `${id}_error` : null}
                />
                <Label inputId={id} cssClass="label--radio">{label}</Label>
            </div>
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null } 
        </div>
    );
}

export default RadioButtonField;