import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Component from '.';

export default {
  title: 'molecules/ModalDontTest',
  component: Component,
  parameters: { fileName: __filename }
};

export const Modal = () => (
  <>
    <Component
      modalState={{
        isOpen: boolean('isOepn', true)
      }}
    >
      Children Content
    </Component>
  </>
);
