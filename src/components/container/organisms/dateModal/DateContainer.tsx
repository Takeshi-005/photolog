import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { COLOR, DEVICE } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <ScheduleIcon />
    {props.children}
  </div>
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media ${DEVICE.mobile} {
  }

  > svg {
    fill: ${COLOR.primary};
  }
`;
