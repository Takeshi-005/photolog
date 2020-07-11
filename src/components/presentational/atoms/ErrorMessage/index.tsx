import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  text: string;
  className?: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = React.memo(
  props => <StyledComponent {...props}>{props.text}</StyledComponent>,
  (p, n) => p.text === n.text
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.p<Props>`
  color: ${COLOR.emphasis};
  font-weight: 700;
`;

export default Component;
