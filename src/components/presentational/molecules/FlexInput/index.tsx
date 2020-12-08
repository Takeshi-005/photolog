import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @ Types
type Props = {
  className?: string;
  value: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = React.memo(
  props => <StyledComponent {...props}>{props.children}</StyledComponent>,
  (p, n) => p.value === n.value
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.div<Props>`
  display: flex;
  align-items: center;

  * + & {
    margin-top: 6px;
  }

  svg {
    padding-right: 4px;
    fill: ${props => (props.value ? COLOR.primary : COLOR.unselected)};
  }
`;

export default Component;
