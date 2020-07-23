import styled from 'styled-components';
import Component from '.';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  background: #efebe9;
  border: 0;
  color: #757575;
  width: 36px;
  height: 36px;
  &:hover {
    background: ${COLOR.primary};
    color: #fff;
  }
`;
