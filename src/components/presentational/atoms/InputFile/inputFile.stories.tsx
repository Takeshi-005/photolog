import React from 'react';
import Component from '.';

export default {
  title: 'atoms/InputFile',
  component: Component,
  parameters: { fileName: __filename }
};

export const InputFile = () => (
  <>
    <h1>画像インプット</h1>
    <Component />
  </>
);
