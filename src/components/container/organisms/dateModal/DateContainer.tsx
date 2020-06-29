import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Props as InputProps } from 'components/presentational/atoms/Input';
import DateInput from './DateInput';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = InputProps & {
  startDate: string;
  endDate: string;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <ScheduleIcon />
    <DateInput date={props.startDate} />
    〜
    <DateInput date={props.endDate} />
  </div>
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  align-items: center;

  > svg {
    fill: ${COLOR.primary};
  }
`;
