import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/style';
import { Type } from './index';

// ______________________________________________________
//
// @ Types
type Props = { type?: Type; className?: string };

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
  ${props =>
    props.type !== 'input' &&
    css`
      flex: 1 1 0%;
      border-bottom: 1px solid ${COLOR.border};
    `}

  &:last-child {
    border-bottom: none;
  }
`;
