import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from './Flat';

export default {
  title: 'atoms/Input',
  component: Component,
  parameters: { fileName: __filename }
};

export const Flat = () => (
  <>
    <Component
      value={text('text', 'FlatInput')}
      name={text('name', 'name')}
      placeholder={text('placeholder', 'プレースホルダー')}
      style={{
        fontSize: '18px',
        width: '400px'
      }}
    />
  </>
);
