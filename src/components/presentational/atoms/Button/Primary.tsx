import styled from 'styled-components';
import Component from '.';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  background: ${COLOR.primary};
  border: 0;
  color: #fff;
  &:hover {
    background: ${COLOR.primary};
    opacity: 0.8;
  }
`;
