import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  value: string;
  placeholder?: string;
  className?: string;
  style?: {
    width?: string;
    height?: string;
  };
  maxlength?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => (
    <>
      <input
        className={props.className}
        type="text"
        maxLength={props.maxlength}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </>
  ),
  (p, n) => p.value === n.value
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  -webkit-appearance: none;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  width: ${props => props.style?.width ?? '100%'};
  height: ${props => props.style?.height ?? '100%'};
  color: ${COLOR.text};
`;
