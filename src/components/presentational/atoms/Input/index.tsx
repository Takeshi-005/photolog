import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/style';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// ______________________________________________________
//
// @ Types
export type Modifier = 'big' | 'flat' | 'notDelIcon';

export type Props = {
  value?: string;
  name?: string;
  handleChange?: (name: string, value: string) => void;
  handleDelete?: (name: string) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /* react-tooltip で使用する */
  dataFor?: string;
  /* react-tooltip で使用する */
  dataEvent?: string;
  style?: {
    width?: string;
    height?: string;
  };
  modifier?: Modifier[];
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
        data-tip
        data-for={props.dataFor}
        data-event={props.dataEvent}
        type="text"
        maxLength={props.maxlength}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e =>
          props.handleChange &&
          props.handleChange(props.name ?? '', e.currentTarget.value)
        }
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
      />
      <div className="focus"></div>
      {!props.modifier?.includes('notDelIcon') && (
        <span
          onClick={() =>
            props.handleDelete && props.handleDelete(props.name ?? '')
          }
        >
          <HighlightOffIcon />
        </span>
      )}
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
      props.modifier?.includes('big') &&
      css`
        font-size: 18px;
      `}

    ${props =>
      props.modifier?.includes('flat') &&
      css`
        &:focus,
        &:hover {
          background: #f5f5f5;
        }
      `}
  }

  ${props =>
    !props.modifier?.includes('flat') &&
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
