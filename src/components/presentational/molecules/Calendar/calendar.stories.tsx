import React from 'react';
import { number } from '@storybook/addon-knobs';
import Component from '.';
import useCalendar from 'hooks/useCalendar';

export default {
  title: 'molecules/Calendar',
  component: Component,
  parameters: { fileName: __filename }
};

export const Calendar = () => {
  const { dates } = useCalendar();

  return (
    <>
      <Component
        dates={dates}
        currents={{
          year: number('year', new Date().getFullYear()),
          month: number('month', new Date().getMonth() + 1)
        }}
      />
    </>
  );
};
