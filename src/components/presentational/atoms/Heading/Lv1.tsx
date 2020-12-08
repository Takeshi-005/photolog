import React from 'react';
import styled from 'styled-components';

//______________________________________________________
//
// @ Component
export const Component: React.FC<{
  className?: string;
  text: string;
}> = props => <StyledComponent>{props.text}</StyledComponent>;

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

export default Component;
