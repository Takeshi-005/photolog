import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'atoms/ErrorMessage',
  component: Component
};

export const ErrorMessage = () => (
  <>
    <h1>エラーメッセージ</h1>
    <Component text={text('text', 'error message')} />
  </>
);
