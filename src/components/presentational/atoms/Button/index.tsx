import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR, TRANSITION } from 'styles/style';

// ______________________________________________________
//
// @ Constants
export const BUTTON_TYPE = {
  primary: {
    color: '#fff',
    bg: COLOR.primary,
    border: 'none'
  },
  simple: {
    color: '#757575',
    bg: '#efebe9',
    border: 'none',
    width: '36px'
  },
  // secondary: {
  //   color: 'rgb(0,0,0)',
  //   bg: '#ff0'
  // },
  disabled: {
    color: '#fff',
    bg: '#ccc',
    border: 'none'
  }
} as const;

// ______________________________________________________
//
// @ Types
export type ButtonType = keyof typeof BUTTON_TYPE;
type Props = {
  /** 表示するテキスト */
  text?: string;
  /** ボタンタイプ */
  types?: ButtonType;
  /** CSS拡張 */
  style?: React.CSSProperties;
  /** onClick Event */
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** styled-components */
  className?: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = React.memo(
  props => {
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
  },
  (p, n) => p.text === n.text && p.types === n.types
);

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
  background-color: ${props =>
    (props.types && BUTTON_TYPE[props.types].bg) ?? '#fff'};
  color: ${props =>
    (props.types && BUTTON_TYPE[props.types].color) ?? COLOR.text};
  border: ${props =>
    props.types
      ? BUTTON_TYPE[props.types].border
      : `1px solid ${COLOR.border}`};
  width: ${props => props.style?.width ?? 'auto'};
  height: ${props => props.style?.height ?? '40px'};
  &:hover {
    ${props =>
      props.types === 'primary'
        ? css`
            opacity: 0.8;
          `
        : props.types === 'simple'
        ? css`
            background: ${COLOR.primary};
            color: #fff;
          `
        : !props.types &&
          css`
            background: #d5d5d5;
          `}
  }
  ${props =>
    props.types === 'simple' &&
    css`
      height: 36px;
    `}

  ${props =>
    props.types === 'disabled' &&
    css`
      cursor: auto;
    `}
`;

export default Component;
