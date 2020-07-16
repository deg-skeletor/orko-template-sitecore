import React from 'react';
import ColorSwatches from './colorSwatches.js';

const primaryColors = [
    {
        name: 'Black',
        code: '#000000'
    },
    {
        name: 'White',
        code: '#ffffff'
    }
];

const secondaryColors = [
    {
        name: 'Gray',
        code: '#999999'
    }
];

export default {
    title: 'Basics/Graphic Elements/Colors'
};

export const primary = () => <ColorSwatches colors={primaryColors} />;
export const secondary = () => <ColorSwatches colors={secondaryColors} />;
  