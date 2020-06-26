import React from 'react';
import moment from 'moment';
import range from 'utils/range';

export type Current = {
  year: number;
  month: number;
  date: number;
  hour: number;
};

const useCalendar = () => {
  const [currents, setCurrent] = React.useState<Current>({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
    hour: moment().hour()
  });
  const [dates, setDates] = React.useState<number[][]>([]);

  const handleNext = React.useCallback(() => {
    setCurrent(currents => {
      const newCurrents = { ...currents };
      const month = currents['month'] + 1;
      if (month > 11) {
        newCurrents['month'] = 0;
        newCurrents['year'] = currents['year'] + 1;
      } else {
        newCurrents['month'] = month;
      }

      return newCurrents;
    });
  }, []);

  const handlePrev = React.useCallback(() => {
    setCurrent(currents => {
      const newCurrents = { ...currents };
      const month = currents['month'] - 1;
      if (month < 0) {
        newCurrents['year'] = currents['year'] - 1;
        newCurrents['month'] = 11;
      } else {
        newCurrents['month'] = month;
      }

      return newCurrents;
    });
  }, []);

  moment.locale('ja', {
    weekdays: [
      '日曜日',
      '月曜日',
      '火曜日',
      '水曜日',
      '木曜日',
      '金曜日',
      '土曜日'
    ],
    weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
  });

  React.useEffect(() => {
    const numOfMonth = moment()
      .add(currents.month, 'months')
      .endOf('month')
      .date();
    const daysOfMonth = range(numOfMonth).map(i => ++i);
    const firstWeekDay =
      moment()
        .add(currents.month, 'months')
        .startOf('month')
        .weekday() + 1;
    const lastMonthDay = moment()
      .add(currents.month - 1, 'months')
      .endOf('month')
      .date();

    setDates(
      range(5).map(weekIndex =>
        range(7).map(dayIndex => {
          const i = 7 * weekIndex + dayIndex - firstWeekDay;
          const count = 7 * weekIndex + (dayIndex + 1);
          if (weekIndex === 0 && dayIndex < firstWeekDay) {
            return lastMonthDay - firstWeekDay + dayIndex + 1;
          } else if (numOfMonth < count) {
            return count - numOfMonth;
          }

          return daysOfMonth[i];
        })
      )
    );
  }, [currents.month]);

  return {
    currents,
    dates,
    handleNext,
    handlePrev
  };
};

export default useCalendar;
