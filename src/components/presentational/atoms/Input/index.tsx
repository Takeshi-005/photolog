import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/style';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// ______________________________________________________
//
// @ Types
export type Modifier = 'big' | 'flat';

export type Props = {
  value?: string;
  name: string;
  handleChange?: (name: string, value: string) => void;
  handleDelete?: (name: string) => void;
  placeholder?: string;
  style?: {
    width?: string;
    height?: string;
  };
  modifier?: Modifier;
  maxlength?: number;
  className?: string;
};

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = React.memo(
  props => (
    <StyledComponent {...props}>
      <input
        type="text"
        maxLength={props.maxlength}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e =>
          props.handleChange &&
          props.handleChange(props.name ?? '', e.currentTarget.value)
        }
      />
      {props.modifier !== 'flat' && <div className="focus"></div>}
      <span
        onClick={() =>
          props.handleDelete && props.handleDelete(props.name ?? '')
        }
      >
        <HighlightOffIcon />
      </span>
    </StyledComponent>
  ),
  (p, n) => p.value === n.value
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled.div<Props>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  > input {
    -webkit-appearance: none;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    width: ${props => props.style?.width ?? '100%'};
    height: ${props => props.style?.height ?? 'auto'};
    color: ${COLOR.text};

    ${props =>
      props.modifier === 'big' &&
      css`
        font-size: 18px;
      `}
  }

  ${props =>
    props.modifier !== 'flat' &&
    css`
      &:before {
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        position: absolute;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-bottom: 1px solid rgba(0, 0, 0, 0.42);
        pointer-events: none;
      }

      &:hover {
        &:before {
          border-bottom: 2px solid rgba(0, 0, 0, 0.87);
        }
      }
    `}

  > .focus {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom: 2px solid #1976d2;
    pointer-events: none;
  }

  > input:focus + .focus {
    transform: scaleX(1);
  }

  > span {
    display: ${props => (props.value ? 'block' : 'none')};
    width: 18px;
    height: 18px;

    svg {
      font-size: 18px;
      fill: #999;
      cursor: pointer;
    }
  }
`;

export default Component;
