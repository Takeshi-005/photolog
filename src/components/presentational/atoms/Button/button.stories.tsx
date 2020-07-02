import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component, { ButtonType } from '.';

export default {
  title: 'Button',
  component: Component
};

export const Button = () => (
  <>
    <Component
      text={text('text', 'text')}
      types={text('type', 'primary') as ButtonType}
    />
    <Component text={text('text', 'text')} />
  </>
);
