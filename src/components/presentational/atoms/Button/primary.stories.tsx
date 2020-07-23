import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from './Primary';

export default {
  title: 'atoms/Button',
  component: Component,
  parameters: { fileName: __filename }
};

export const Primary = () => (
  <>
    <Component text={text('text', 'text')} />
  </>
);
