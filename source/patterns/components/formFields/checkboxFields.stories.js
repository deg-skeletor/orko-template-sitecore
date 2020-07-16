import React from 'react';
import CheckboxField from './checkboxField';
import FieldGroup from './fieldGroup';

export default {
    title: 'Components/Form Fields/Checkbox Fields'
};

export const checkbox = () => <CheckboxField id="checkbox" value="true" label="Checkbox" />;
export const checkboxInvalid = () => <CheckboxField id="checkbox" value="true" label="Checkbox" isInvalid={true} errorMessage="This is an error message" />;

export const checkboxGroup = () => 
    <FieldGroup label="Checkbox Group">
        <CheckboxField id="checkbox-1" id="checkbox-1" name="checkbox" value="1" label="Checkbox 1" />
        <CheckboxField id="checkbox-2" id="checkbox-2" name="checkbox" value="2" label="Checkbox 2" />
        <CheckboxField id="checkbox-3" id="checkbox-3" name="checkbox" value="3" label="Checkbox 3" />
    </FieldGroup>

export const checkboxGroupInvalid = () => 
    <FieldGroup label="Checkbox Group" isInvalid={true} errorMessage="This is an error message">
        <CheckboxField id="checkbox-1" id="checkbox-1" name="checkbox" value="1" label="Checkbox 1" />
        <CheckboxField id="checkbox-2" id="checkbox-2" name="checkbox" value="2" label="Checkbox 2" />
        <CheckboxField id="checkbox-3" id="checkbox-3" name="checkbox" value="3" label="Checkbox 3" />
    </FieldGroup>
  