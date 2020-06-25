import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR, TRANSITION } from 'styles/style';

// ______________________________________________________
//
// @ Constants
const BUTTON_TYPE = {
  primary: {
    color: '#fff',
    bg: COLOR.primary,
    border: 'none'
  },
  simple: {
    color: '#757575',
    bg: '#efebe9',
    border: 'none'
  }
  // secondary: {
  //   color: 'rgb(0,0,0)',
  //   bg: '#ff0'
  // },
  // disabled: {
  //   color: '#fff',
  //   bg: '#ccc'
  // }
} as const;

// ______________________________________________________
//
// @ Types
export type ButtonType = keyof typeof BUTTON_TYPE;
type Props = {
  /** 表示するテキスト */
  text?: string;
  types?: ButtonType;
  style?: {
    width?: string;
    height?: string;
  };
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** styled-components */
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => {
    return (
      <StyledComponent {...props} onClick={props.handleClick}>
        {props.children}
        {props.text}
      </StyledComponent>
    );
  },
  (p, n) => p.text === n.text
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.button<Props>`
  line-height: 1.4;
  border-radius: 4px;
  transition: ${TRANSITION};
  cursor: pointer;
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
      props.types
        ? css`
            opacity: 0.8;
          `
        : css`
            background: #d5d5d5;
          `}
  }
`;

export default Component;
