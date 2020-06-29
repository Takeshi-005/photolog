import React from 'react';
import styled from 'styled-components';
import Input from 'components/presentational/atoms/Input';
import Calendar from 'components/presentational/molecules/Calendar';

import useCalendar from 'hooks/useCalendar';
import useModal, { State } from 'hooks/useModal';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  date: string;
  className?: string;
};
type Props = ContainerProps & {
  start: {
    date: string;
    time: string;
  };
  handleFocus: () => void;
  handleBlur: () => void;
  dates: Date[][];
  currents: Date;
  modalState: State;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [date, time] = props.date.split(' ');
  const { currents, dates } = useCalendar();
  const { modalState, openModal, closeModal } = useModal();

  const handleFocus = React.useCallback(
    () => {
      openModal();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleBlur = React.useCallback(
    () => {
      closeModal();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <StyledComponent
      {...props}
      start={{ date, time }}
      dates={dates}
      currents={currents}
      modalState={modalState}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="date">
      <Input
        value={props.start.date}
        handleFocus={props.handleFocus}
        handleBlur={props.handleBlur}
        modifier={['flat', 'notDelIcon']}
        style={{ width: '145px' }}
      />
      {props.modalState.isOpen && (
        <div className="modal">
          <OverrideCalendar
            dates={props.dates}
            currents={{
              year: props.currents.getFullYear(),
              month: props.currents.getMonth() + 1
            }}
            type="input"
          />
        </div>
      )}
    </div>
    <Input
      value={props.start.time}
      modifier={['flat', 'notDelIcon']}
      style={{ width: '65px' }}
    />
  </div>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  display: flex;

  > .date {
    position: relative;

    > .modal {
      position: absolute;
      top: 40px;
      z-index: 10;
    }
  }
`;

const OverrideCalendar = styled(Calendar)``;

export default Container;
