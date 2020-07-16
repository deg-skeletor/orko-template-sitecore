import React from 'react';
import Button from './button.js';
import ButtonLink from './buttonLink.js';

export default {
    title: 'Basics/Interface Elements/Buttons'
};

export const button = () => <Button>Button</Button>;
export const buttonDisabled = () => <Button isDisabled={true}>Button</Button>;
export const buttonLink = () => <ButtonLink>Button Link</ButtonLink>;  