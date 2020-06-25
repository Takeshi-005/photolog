import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Component } from './Input';

export default {
  title: 'Input',
  component: Component
};

export const Input = () => (
  <Component
    value={text('value', 'value')}
    placeholder={text('placeholder', 'プレースホルダー')}
  />
);
