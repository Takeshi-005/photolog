import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string;
  date: number;
  handleClick: () => void;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(props => (
  <div className={props.className} onClick={props.handleClick}>
    {props.date}
  </div>
));

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  border-right: 1px solid ${COLOR.border};
  flex: 1 1 0%;
  text-align: center;

  &:last-child {
    border-right: none;
  }
`;
