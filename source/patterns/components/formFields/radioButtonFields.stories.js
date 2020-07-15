import React from 'react';
import RadioButtonField from './radioButtonField';
import FieldGroup from './fieldGroup';

export default {
    title: 'Components/Form Fields/Radio Button Fields'
};

export const radioButton = () => <RadioButtonField value="true" label="Radio Button" />;
export const radioButtonInvalid = () => <RadioButtonField value="true" label="Radio Button" isInvalid={true} errorMessage="This is an error message" />;

export const radioButtonGroup = () => 
    <FieldGroup label="Radio Button Group" id="radio-button-group">
        <RadioButtonField id="radio-1" name="radio" value="1" label="Radio Button 1" />
        <RadioButtonField id="radio-2" name="radio" value="2" label="Radio Button 2" />
        <RadioButtonField id="radio-3" name="radio" value="3" label="Radio Button 3" />
    </FieldGroup>
 
 export const radioButtonGroupInvalid = () => 
    <FieldGroup label="Radio Button Group" id="radio-button-group" isInvalid={true} errorMessage="This is an error message">
        <RadioButtonField id="radio-1" name="radio" value="1" label="Radio Button 1" />
        <RadioButtonField id="radio-2" name="radio" value="2" label="Radio Button 2" />
        <RadioButtonField id="radio-3" name="radio" value="3" label="Radio Button 3" />
    </FieldGroup>
  