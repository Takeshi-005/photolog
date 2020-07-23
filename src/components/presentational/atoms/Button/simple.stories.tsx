import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from './Simple';

export default {
  title: 'atoms/Button',
  component: Component,
  parameters: { fileName: __filename }
};

export const Simple = () => (
  <>
    <Component text={text('text', 'text')} />
  </>
);
