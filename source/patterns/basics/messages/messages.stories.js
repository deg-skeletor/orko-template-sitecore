import React from 'react';
import ErrorMessage from './errorMessage.js';
import FieldErrorMessage from './fieldErrorMessage.js';
import FormErrorMessage from './formErrorMessage.js';

export default {
    title: 'Basics/Messages'
};

export const errorMessage = () => <ErrorMessage />
export const fieldErrorMessage = () => <FieldErrorMessage />;
export const formErrorMessage = () => <FormErrorMessage />;
  