import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'molecules/Drawer',
  component: Component,
  parameters: { fileName: __filename }
};

export const Drawer = () => (
  <>
    <Component isOpen={boolean('isOepn', true)}>Children Content</Component>
  </>
);
