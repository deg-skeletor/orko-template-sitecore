import React from 'react';
import Label from '../../basics/labels/label';
import SelectMenu from '../../basics/inputs/selectMenu';
import FieldErrorMessage from '../../basics/formMessages/fieldErrorMessage';
import classnames from 'classnames';


function SelectMenuField({
    id='select-menu',
    name='select-menu',
    options,
    isRequired=false,
    isDisabled=false,
    label='Select Menu Field',
    isInvalid=false,
    cssClass,
    isInline = false,
    size,
    errorMessage
}) {

    const CssClasses = classnames('field', cssClass, {
        'field--inline': isInline
    });

    return (
        <div className={CssClasses}>
            <Label inputId={id} isRequired={isRequired}>{label}</Label>
            <SelectMenu 
                id={id}
                name={name}
                options={options}
                isRequired={isRequired}
                isDisabled={isDisabled}
                size={size}
                ariaDescribedBy={isInvalid ? `${id}_error` : null}
            />           
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null }  
        </div>
    );
}

export default SelectMenuField;