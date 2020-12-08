import React from 'react';
import styled from 'styled-components';
import { COLOR, TRANSITION } from 'styles/style';

// ______________________________________________________
//
// @ Types
export type Props = {
  /** 表示するテキスト */
  text?: string;
  types?: 'disabled';
  /** CSS拡張 */
  style?: React.CSSProperties;
  /** onClick Event */
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** styled-components */
  className?: string;
  value?: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = props => {
  //React.memo(
  return (
    <StyledComponent
      {...props}
      onClick={props.handleClick}
      disabled={props.types === 'disabled' ? true : false}
    >
      {props.children}
      {props.text}
    </StyledComponent>
  );
};
// (p, n) => p.text === n.text && p.types === n.types && p.value === n.value
// );

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.button<Props>`
  line-height: 1.4;
  border-radius: 4px;
  transition: ${TRANSITION};
  cursor: pointer;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: ${COLOR.text};
  border: 1px solid ${COLOR.border};
  width: ${props => props.style?.width ?? 'auto'};
  height: ${props => props.style?.height ?? '40px'};
  &:hover {
    background: ${COLOR.primary};
    color: #fff;
  }
`;

export default Component;
