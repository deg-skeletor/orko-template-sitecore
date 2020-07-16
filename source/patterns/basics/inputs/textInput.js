import React from 'react';
import classnames from 'classnames';

function TextInput({
    type="text",
    id,
    name,
    value,
    pattern,
    maxLength,
    placeholder,
    isRequired=false,
    isDisabled=false,
    isInvalid=false,
    size,
    ariaDescribedBy,
    cssClass,
    attrs={}
}) {
    const cssClasses = classnames('input', 'input--text', cssClass, {
        'input--invalid': isInvalid,
        [`input--${size}`]: size
    });

    return (
        <input
            className={cssClasses}
            type={type}
            id={id}
            name={name ? name : id}
            defaultValue={value}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            required={isRequired}
            disabled={isDisabled}
            aria-describedby={ariaDescribedBy}
            {...attrs} />
    );
}

export default TextInput;