import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/style';
import { Type } from './index';

// ______________________________________________________
//
// @ Types
type Props = {
  days: string[];
  type?: Type;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.days.map(day => (
      <div key={day}>{day}</div>
    ))}
  </div>
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  align-items: stretch;

  > div {
    flex: 1 1 0%;
    text-align: center;
    ${props =>
      props.type !== 'input' &&
      css`
        border-right: 1px solid ${COLOR.border};
      `}

    &:last-child {
      border-right: none;
    }
  }
`;
