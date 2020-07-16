import React, {Children} from 'react';
import FieldErrorMessage from '../../basics/messages/fieldErrorMessage';
import classnames from 'classnames';

function FieldGroup({
    id='field-group',
    name='field-group',
    label,
    children,
    isInvalid=false,
    errorMessage,
    cssClass
}) {
    const cssClasses = classnames('field-group', cssClass);

    return (
        <fieldset
            name={name}  
            className={cssClasses}
            aria-describedby={isInvalid ? `${id}_error` : null}>
            <legend className="field-group__label">{label}</legend>
            <ul className="field-list" >
            {
                Children.map(children, child => <li className="field-list__item">{child}</li>)
            }
            </ul>
            { isInvalid ? <FieldErrorMessage id={`${id}_error`} content={errorMessage} /> : null }
        </fieldset>
    );
}

export default FieldGroup;