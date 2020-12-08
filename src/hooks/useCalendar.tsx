import React from 'react';
import moment from 'moment';
import range from 'utils/range';

const useCalendar = (date = new Date()) => {
  const [currents, setCurrent] = React.useState(date);
  const [dates, setDates] = React.useState<Date[][]>([]);

  const handleNext = React.useCallback(() => {
    setCurrent(currents => {
      return moment(currents)
        .add(1, 'month')
        .toDate();
    });
  }, []);

  const handlePrev = React.useCallback(() => {
    setCurrent(currents => {
      return moment(currents)
        .add(-1, 'month')
        .toDate();
    });
  }, []);

  moment.updateLocale('ja', {
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
    const numOfMonth = moment(currents)
      .endOf('month')
      .date();
    const daysOfMonth = range(numOfMonth).map(i => ++i);
    const firstWeekDay = moment(currents)
      .startOf('month')
      .weekday();
    const lastMonthDay = moment(currents)
      .add(-1, 'months')
      .endOf('month')
      .date();

    setDates(
      range(firstWeekDay > 5 ? 6 : 5).map(weekIndex =>
        range(7).map(dayIndex => {
          const i = 7 * weekIndex + dayIndex - firstWeekDay;
          let month = 0;
          let day = 0;

          if (weekIndex === 0 && dayIndex < firstWeekDay) {
            month = -1;
            day = lastMonthDay - firstWeekDay + dayIndex + 1;
          } else if (numOfMonth <= i) {
            month = 1;
            console.log(i);
            console.log(numOfMonth);

            day = i - numOfMonth + 1;
          } else {
            day = daysOfMonth[i];
          }

          const date = moment(currents).add(month, 'month');

          return moment(
            `${date.year()}/${date.month() + 1}/${day} ${currents.getHours() +
              1}:00`
          ).toDate();
        })
      )
    );
  }, [currents]);

  return {
    currents,
    dates,
    handleNext,
    handlePrev
  };
};

export default useCalendar;
