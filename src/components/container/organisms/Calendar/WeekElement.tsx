import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = { className?: string };

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>{props.children}</div>
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  flex: 1 1 0%;
  border-bottom: 1px solid ${COLOR.border};

  &:last-child {
    border-bottom: none;
  }
`;
