import React from 'react';
import Icon from './icon.js';

const iconIds = [];

export default {
    title: 'Basics/Graphic Elements/Icons'
};

export const icons = () => iconIds.map(iconId => <Icon id={iconId} />);
  