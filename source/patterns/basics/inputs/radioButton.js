import React from 'react';
import classnames from 'classnames';

function RadioButton({
    id,
    name,
    value,
    isChecked=false,
    isRequired=false,
    isDisabled=false,
    ariaDescribedBy,
    cssClass,
    attrs={}    
}) {
    const cssClasses = classnames('input', 'input--radio', cssClass);

    return (
        <input
            className={cssClasses}
            type="radio"
            id={id}
            name={name ? name : id}
            defaultChecked={isChecked}
            value={value}
            required={isRequired}
            disabled={isDisabled}
            aria-describedby={ariaDescribedBy} 
            {...attrs} />
    );
}

export default RadioButton;