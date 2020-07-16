import React from 'react';
import { text } from '@storybook/addon-knobs';
import Component from '.';
import Input from '../../atoms/Input/index';
import AlbumIcon from '@material-ui/icons/Album';

export default {
  title: 'molecules/FlexInput',
  component: Component,
  parameters: { fileName: __filename }
};

export const FlexInput = () => {
  return (
    <>
      <Component value={text('value', 'value')}>
        <AlbumIcon />
        <Input value={text('value', 'value')} />
      </Component>
    </>
  );
};
