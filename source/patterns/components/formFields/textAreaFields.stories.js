import React from 'react';
import TextAreaField from './textAreaField';

export default {
    title: 'Components/Form Fields/Text Area Fields'
};

export const textAreaField = () => <TextAreaField value="Text Area" />;
export const small = () => <TextAreaField value="Text Area" size="small" />;
export const medium = () => <TextAreaField value="Text Area" size="medium" />;
export const large = () => <TextAreaField value="Text Area" size="large" />;
export const fullWidth = () => <TextAreaField value="Text Area" size="full" />;
export const invalid = () => <TextAreaField value="Text Area" isInvalid={true} errorMessage="This is an error message" />;