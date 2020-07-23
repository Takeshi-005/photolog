import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from './Disabled';

export default {
  title: 'atoms/Button',
  component: Component,
  parameters: { fileName: __filename }
};

export const Disabled = () => (
  <>
    <Component text={text('text', 'text')} />
  </>
);
