import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'atoms/Input',
  component: Component,
  parameters: { fileName: __filename }
};

export const Input = () => (
  <Component
    value={text('value', 'value')}
    name={text('name', 'name')}
    placeholder={text('placeholder', 'プレースホルダー')}
  />
);
