import React from 'react';
import classnames from 'classnames';

function TextArea({
    id,
    name,
    value,
    placeholder,
    isRequired=false,
    isDisabled=false,
    isInvalid=false,
    size,
    maxLength,
    ariaDescribedBy,
    cssClass,
    attrs={}
}) {
    const cssClasses = classnames('input', 'input--textarea', cssClass, {
        'input--invalid': isInvalid,
        [`input--${size}`]: size
    });

    return (
        <textarea
            className={cssClasses}
            id={id}
            name={name ? name : id}
            defaultValue={value}
            placeholder={placeholder}
            maxLength = {maxLength}
            required={isRequired}
            disabled={isDisabled}
            aria-describedby={ariaDescribedBy}
            {...attrs}></textarea>
    );
}

export default TextArea;