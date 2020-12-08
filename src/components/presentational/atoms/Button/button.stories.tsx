import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'atoms/Button',
  component: Component,
  parameters: { fileName: __filename }
};

export const Common = () => (
  <>
    <Component text={text('text', 'text')} />
  </>
);
