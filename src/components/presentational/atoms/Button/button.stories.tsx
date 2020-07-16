import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component, { ButtonType } from '.';

export default {
  title: 'atoms/Button',
  component: Component,
  parameters: { fileName: __filename }
};

export const Button = () => (
  <>
    <h1>プライマリーボタン</h1>
    <Component
      text={text('text', 'text')}
      types={text('type', 'primary') as ButtonType}
    />
    <h1>共通ボタン</h1>
    <Component text={text('text', 'text')} />
  </>
);
