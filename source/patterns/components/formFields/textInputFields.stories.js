import React from 'react';
import TextInputField from './textInputField';

export default {
    title: 'Components/Form Fields/Text Input Fields'
};

export const textInputField = () => <TextInputField value="text" />;
export const small = () => <TextInputField value="text" size="small" />;
export const medium = () => <TextInputField value="text" size="medium" />;
export const large = () => <TextInputField value="text" size="large" />;
export const fullWidth = () => <TextInputField value="text" size="full" />;
export const invalid = () => <TextInputField value="text" isInvalid={true} errorMessage="This is an error message" />;