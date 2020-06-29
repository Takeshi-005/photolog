import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'Input',
  component: Component
};

export const Input = () => (
  <Component
    value={text('value', 'value')}
    name={text('name', 'name')}
    placeholder={text('placeholder', 'プレースホルダー')}
  />
);