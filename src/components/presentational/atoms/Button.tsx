import React from 'react';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types
type Props = {
  text: string;
  style?: {
    width?: string;
    height?: string;
  };
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => {
    return (
      <button className={props.className} onClick={props.handleClick}>
        {props.text}
      </button>
    );
  },
  (p, n) => p.text === n.text
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  cursor: pointer;
  line-height: 1.75;
  border-radius: 4px;
  width: ${props => props.style?.width ?? '100%'};
  height: ${props => props.style?.height ?? '40px'};
  transition: all 0.25s ease;
  &:hover {
    background: #d5d5d5;
  }
`;
