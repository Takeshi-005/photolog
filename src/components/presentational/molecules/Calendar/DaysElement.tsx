import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/style';
import moment from 'moment';
import { Type } from './index';

// ______________________________________________________
//
// @ Types
type Props = {
  date: Date;
  handleClick?: (date: Date) => void;
  type?: Type;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(props => (
  <div
    className={props.className}
    onClick={() => props.handleClick && props.handleClick(props.date)}
  >
    {moment(props.date).date()}
  </div>
));

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  text-align: center;
  ${props =>
    props.type !== 'input' &&
    css`
      flex: 1 1 0%;
      border-right: 1px solid ${COLOR.border};
    `}

  ${props =>
    props.type === 'input' &&
    css`
      width: 32px;
      height: 32px;
    `}

  &:last-child {
    border-right: none;
  }
`;
