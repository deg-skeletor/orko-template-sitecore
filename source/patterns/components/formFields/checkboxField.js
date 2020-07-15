import React from 'react';
import Label from '../../basics/labels/label';
import Checkbox from '../../basics/inputs/checkbox';
import FieldErrorMessage from '../../basics/formMessages/fieldErrorMessage';

function CheckboxField({
    id='checkbox',
    name='checkbox',
    value,
    isChecked=false,
    isRequired=false,
    isDisabled=false,
    label='Checkbox Field',
    isInvalid=false,
    errorMessage
}) {
    return (
        <div className="field field--checkbox">
            <div className="field__input-label-wrap">
                <Checkbox 
                    id={id}
                    name={name}
                    value={value}
                    isChecked={isChecked}
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                    ariaDescribedBy={isInvalid ? `${id}_error` : null}
                />
                <Label inputId={id} cssClass="label--checkbox">{label}</Label>
            </div>
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null } 
        </div>
    );
}

export default CheckboxField;