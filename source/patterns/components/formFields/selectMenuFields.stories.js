import React from 'react';
import SelectMenuField from './selectMenuField';

const options = [
    'Option 1',
    'Option 2',
    'Option 3'
];

export default {
    title: 'Components/Form Fields/Select Menu Fields'
};

export const selectMenuField = () => <SelectMenuField options={options} />;
export const small = () => <SelectMenuField size="small" />;
export const medium = () => <SelectMenuField size="medium" />;
export const large = () => <SelectMenuField size="large" />;
export const fullWidth = () => <SelectMenuField size="full" />;
export const invalid = () => <SelectMenuField options={options} isInvalid={true} errorMessage="This is an error message" />;