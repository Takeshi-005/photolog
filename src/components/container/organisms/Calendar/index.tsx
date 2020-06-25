import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DayOfWeek from './DayOfWeek';
import DaysElement from './DaysElement';
import Modal from './Modal';
import useModal, { State } from 'useModal';
import { COLOR } from 'styles/style';
import range from 'utils/range';

// ______________________________________________________
//
// @ Types
type ContainerProps = { className?: string };
type Props = ContainerProps & {
  dates: number[][];
  currents: {
    year: number;
    month: number;
  };
  modalState: State;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [currents, setCurrent] = React.useState({
    year: moment().year(),
    month: moment().month()
  });
  const { openModal, closeModal, modalState } = useModal(null, true);
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
      if (weekIndex === 0 && dayIndex < firstWeekDay) {
        return lastMonthDay - firstWeekDay + dayIndex + 1;
      } else if (numOfMonth < count) {
        return count - numOfMonth;
      }

      return daysOfMonth[i];
    })
  );

  return (
    <StyledComponent
      {...props}
      dates={data}
      currents={currents}
      modalState={modalState}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <div className={props.className}>
      <h1>
        {props.currents.year}年{props.currents.month}月
      </h1>
      <div className="wrapper">
        <div className="inner">
          <DayOfWeek days={['日', '月', '火', '水', '木', '金', '土']} />
          {props.dates.map((days, i) => (
            <DaysElement key={i} days={days} />
          ))}
        </div>
      </div>
    </div>
    {props.modalState.isOpen && <Modal modalState={props.modalState} />}
  </>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  > h1 {
    font-size: 20px;
    font-weight: 700;
  }
  > .wrapper {
    border: 1px solid ${COLOR.border};
    height: calc(100vh - 80px);

    > .inner {
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      height: 100%;
    }
  }
`;

export default Container;
