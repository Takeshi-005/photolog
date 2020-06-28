import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Input, {
  Props as InputProps
} from 'components/presentational/atoms/Input';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type ContainerProps = InputProps & {
  startDate: string;
  endDate: string;
  className?: string;
};
type Props = ContainerProps & {
  start: {
    date: string;
    time: string;
  };
  end: {
    date: string;
    time: string;
  };
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [startDate, startTime] = props.startDate.split(' ');
  const [endDate, endTime] = props.endDate.split(' ');

  return (
    <StyledComponent
      {...props}
      start={{ date: startDate, time: startTime }}
      end={{ date: endDate, time: endTime }}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <ScheduleIcon />
    <Input
      value={props.start.date}
      modifier={['flat', 'notDelIcon']}
      style={{ width: '145px' }}
    />
    <Input
      value={props.start.time}
      modifier={['flat', 'notDelIcon']}
      style={{ width: '65px' }}
    />
    〜
    <Input
      value={props.end.date}
      modifier={['flat', 'notDelIcon']}
      style={{ width: '145px' }}
    />
    <Input
      value={props.end.time}
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
  align-items: center;

  > svg {
    fill: ${COLOR.primary};
  }
`;

export default Container;
