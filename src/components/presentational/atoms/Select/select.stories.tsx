import React from 'react';
import Component from '.';

export default {
  title: 'atoms/Select',
  component: Component,
  parameters: { fileName: __filename }
};

const options = {
  data1: 'value1',
  data2: 'value2',
  data3: 'value3'
};

export const Select = () => (
  <>
    <h1>セレクト</h1>
    <Component options={options} />
  </>
);
