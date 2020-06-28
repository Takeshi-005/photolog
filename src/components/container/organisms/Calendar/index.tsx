import React from 'react';
import styled from 'styled-components';
import DayOfWeek from './DayOfWeek';
import DaysElement from './DaysElement';
import WeekElement from './WeekElement';
import Modal from 'components/container/organisms/dateModal/Modal';
import useModal, { State } from 'hooks/useModal';
import useCalendar from 'hooks/useCalendar';
import { COLOR } from 'styles/style';
import Button from 'components/presentational/atoms/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import moment from 'moment';

// ______________________________________________________
//
// @ Types
type ContainerProps = { className?: string };
type Props = ContainerProps & {
  dates: Date[][];
  currents: {
    year: number;
    month: number;
  };
  modalState: State;
  closeModal: () => void;
  openModal: (date: Date) => void;
  handleNext: () => void;
  handlePrev: () => void;
  selectedDate: Date;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const { dates, currents, handleNext, handlePrev } = useCalendar();
  const { openModal, closeModal, modalState } = useModal(false);
  const [selectedDate, setCurrent] = React.useState(new Date());

  const handleOpenModal = React.useCallback((date: Date) => {
    setCurrent(date);
    openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledComponent
      {...props}
      dates={dates}
      currents={{
        year: moment(currents).year(),
        month: moment(currents).month()
      }}
      modalState={modalState}
      closeModal={closeModal}
      openModal={handleOpenModal}
      handleNext={handleNext}
      handlePrev={handlePrev}
      selectedDate={selectedDate}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <div className={props.className}>
      <div className="head">
        <div className="box">
          <Button types="simple" handleClick={props.handlePrev}>
            <ArrowLeftIcon />
          </Button>
          <Button types="simple" handleClick={props.handleNext}>
            <ArrowRightIcon />
          </Button>
        </div>
        <h1>
          {props.currents.year}年 {props.currents.month + 1}月
        </h1>
      </div>
      <div className="wrapper">
        <div className="inner">
          <DayOfWeek days={['日', '月', '火', '水', '木', '金', '土']} />
          {props.dates.map((days, i) => (
            <WeekElement
              key={`${props.currents.year}-${props.currents.month}-${i}`}
            >
              {days.map(date => (
                <DaysElement
                  key={`${props.currents.year}-${props.currents.month}-${date}`}
                  date={date}
                  handleClick={props.openModal}
                />
              ))}
            </WeekElement>
          ))}
        </div>
      </div>
    </div>
    {props.modalState.isOpen && (
      <Modal
        modalState={props.modalState}
        date={props.selectedDate}
        closeModal={props.closeModal}
      />
    )}
  </>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  > .head {
    display: flex;
    align-items: center;
    padding: 16px;
    > h1 {
      font-size: 20px;
      color: ${COLOR.gray};
      font-weight: 400;
      margin-left: 16px;
    }
    > .box {
      display: flex;
    }
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
