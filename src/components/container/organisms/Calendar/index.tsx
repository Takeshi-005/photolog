import React from 'react';
import styled from 'styled-components';
import DayOfWeek from './DayOfWeek';
import DaysElement from './DaysElement';
import Modal from './Modal';
import useModal, { State } from 'hooks/useModal';
import useCalendar from 'hooks/useCalendar';
import { COLOR } from 'styles/style';
import Button from 'components/presentational/atoms/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// ______________________________________________________
//
// @ Types
type ContainerProps = { className?: string };
type Props = ContainerProps & {
  data: {
    year: number;
    month: number;
    date: number[][];
  };
  modalState: State;
  closeModal: () => void;
  openModal: () => void;
  handleNext: () => void;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const { data, handleNext } = useCalendar();
  const { openModal, closeModal, modalState } = useModal(null, false);

  return (
    <StyledComponent
      {...props}
      data={data}
      modalState={modalState}
      closeModal={closeModal}
      openModal={openModal}
      handleNext={handleNext}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <div className={props.className}>
      <div className="box">
        <Button types="simple" handleClick={props.handleNext}>
          <ArrowRightIcon />
        </Button>
      </div>
      <h1>
        {props.data.year}年{props.data.month + 1}月
      </h1>
      <div className="wrapper">
        <div className="inner">
          <DayOfWeek days={['日', '月', '火', '水', '木', '金', '土']} />
          {props.data.date.map((days, i) => (
            <DaysElement key={i} days={days} handleClick={props.openModal} />
          ))}
        </div>
      </div>
    </div>
    {props.modalState.isOpen && (
      <Modal modalState={props.modalState} closeModal={props.closeModal} />
    )}
  </>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  > .box {
  }
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
