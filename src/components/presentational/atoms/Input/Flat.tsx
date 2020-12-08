import React from 'react';
import styled from 'styled-components';
import Component, { Props } from '.';
import { COLOR } from 'styles/style';

const Container: React.FC<Props> = props => <StyledComponent {...props} />;

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  &:before {
    display: none;
  }

  > input {
    &:focus,
    &:hover {
      background: ${COLOR.focus};
    }
  }
`;

export default Container;
