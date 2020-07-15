import React from 'react';
import classnames from 'classnames';

function SelectMenu({
    id,
    name,
    options=[],
    isRequired=false,
    isDisabled=false,
    isInvalid=false,
    size,
    ariaDescribedBy,
    cssClass,
    attrs={}
}) {
    const cssClasses = classnames('input', 'input--select', cssClass, {
        'input--invalid': isInvalid,
        [`input--${size}`]: size
    });

    return (
        <select 
            id={id}
            name={name ? name : id}
            required={isRequired}
            disabled={isDisabled}
            className={cssClasses}
            aria-describedby={ariaDescribedBy}
            {...attrs}>
            { options.map(renderOption) }
        </select>
    );
}

function renderOption(option, index) {
    let value;
    let name;

    if(typeof option === 'string') {
        value = option;
        name = option;
    } else {
        value = option.value;
        name = option.name;
    }

    return <option key={index} value={value}>{name}</option>;
}

export default SelectMenu;