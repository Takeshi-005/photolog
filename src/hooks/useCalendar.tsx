import React from 'react';
import moment from 'moment';
import range from 'utils/range';

const useCalendar = () => {
  const [currents, setCurrent] = React.useState({
    year: moment().year(),
    month: moment().month()
  });

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

  const [date, setDate] = React.useState<number[][]>([]);
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
    const firstWeekDay = moment()
      .add(currents.month, 'months')
      .startOf('month')
      .weekday();
    const lastMonthDay = moment()
      .add(currents.month, 'months')
      .endOf('month')
      .date();

    setDate(
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
    data: { year: currents.year, month: currents.month, date },
    handleNext,
    handlePrev
  };
};

export default useCalendar;
