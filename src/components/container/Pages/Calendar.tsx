import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Calendar from 'components/presentational/molecules/Calendar';
import Modal from 'components/container/organisms/dateModal';
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
type ContainerProps = RouteComponentProps & { className?: string };
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
export const Component: React.FC<Props> = props => (
  <>
    <div className={props.className}>
      <div className="head">
        <div className="box">
          <PrevButton types="simple" handleClick={props.handlePrev}>
            <ArrowLeftIcon />
          </PrevButton>
          <NextButton types="simple" handleClick={props.handleNext}>
            <ArrowRightIcon />
          </NextButton>
          <h1>
            {props.currents.year}年 {props.currents.month + 1}月
          </h1>
        </div>
      </div>
      <Calendar
        dates={props.dates}
        currents={props.currents}
        handleClick={props.openModal}
      />
    </div>
    <Modal
      modalState={props.modalState}
      date={props.selectedDate}
      closeModal={props.closeModal}
    />
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
    > .box {
      display: flex;
      margin: 0 auto 0 0;
      align-items: center;

      > h1 {
        font-size: 20px;
        color: ${COLOR.gray};
        font-weight: 400;
        margin-left: 16px;
      }
    }
  }
`;

const PrevButton = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const NextButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export default Container;
