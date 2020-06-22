import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DayOfWeek from './DayOfWeek';
import DaysElement from './DaysElement';
import { COLOR } from 'styles/style';
import range from 'utils/range';

// ______________________________________________________
//
// @ Types
type ContainerProps = { className?: string };
type Props = ContainerProps & {
  dates: number[][];
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [currents, setCurrent] = React.useState({
    year: moment().year(),
    month: moment().month()
  });
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
    .add(currents.month - 1, 'months')
    .endOf('month')
    .date();

  const data = range(5).map(weekIndex =>
    range(7).map(dayIndex => {
      const i = 7 * weekIndex + dayIndex - firstWeekDay;
      const count = 7 * weekIndex + (dayIndex + 1);
      console.log(count);
      if (weekIndex === 0 && dayIndex < firstWeekDay) {
        return lastMonthDay - firstWeekDay + dayIndex + 1;
      } else if (numOfMonth < count) {
        return count - numOfMonth;
      }
      return daysOfMonth[i];
    }
  ));

  return <StyledComponent {...props} dates={data} />;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <h1></h1>
    <DayOfWeek days={['日', '月', '火', '水', '木', '金', '土']} />
    <div className="container">
      {props.dates.map((days, i) => (
        <DaysElement key={i} days={days} />
      ))}
    </div>
  </div>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  border: 1px solid ${COLOR.border};
  height: calc(100vh - 64px);

  > .container {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    height: 100%;
  }
`;

export default Container;
