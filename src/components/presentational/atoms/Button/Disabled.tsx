import React from 'react';
import styled from 'styled-components';
import Component, { Props } from '.';

const Container: React.FC<Props> = props => (
  <StyledComponent {...props} types="disabled" />
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  background: #ccc;
  border: 0;
  color: #fff;
  cursor: auto;
  &:hover {
    background: #ccc;
  }
`;

export default Container;
