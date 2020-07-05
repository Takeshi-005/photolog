import styled from 'styled-components';
import { COLOR } from './style';

export const BaseInput = styled.input`
  -webkit-appearance: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  color: ${COLOR.text};
`;
