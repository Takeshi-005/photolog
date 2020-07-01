import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Input from 'components/presentational/atoms/Input';
import Calendar from 'components/presentational/molecules/Calendar';
import useCalendar from 'hooks/useCalendar';
import dateFormat from 'utils/dateFormat';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  tooltip: string;
  value: string;
  name: string;
  handleChange: (name: string, value: string) => void;
  className?: string;
};
type Props = ContainerProps & {
  start: {
    date: string;
    time: string;
  };
  handleClick: (date: Date) => void;
  dates: Date[][];
  currents: Date;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [date, time] = props.value.split(' ');
  const { currents, dates } = useCalendar();

  const handleClick = React.useCallback(
    (date: Date) => {
      props.handleChange(props.name, dateFormat(date));
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
      handleClick={handleClick}
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
        modifier={['flat', 'notDelIcon']}
        style={{ width: '145px' }}
        dataFor={props.tooltip}
        dataEvent="click"
      />
      <ReactTooltip
        id={props.tooltip}
        place="bottom"
        effect="float"
        event="click"
        clickable={true}
        border={true}
        borderColor={COLOR.border}
        backgroundColor="#fff"
        textColor={COLOR.text}
        globalEventOff="click"
      >
        <Calendar
          dates={props.dates}
          currents={{
            year: props.currents.getFullYear(),
            month: props.currents.getMonth() + 1
          }}
          type="input"
          handleClick={props.handleClick}
        />
      </ReactTooltip>
      {/* )} */}
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
      bottom: 0;
    }
  }
`;

export default Container;
