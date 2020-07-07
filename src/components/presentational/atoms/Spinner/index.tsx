import React from 'react';
import styled from 'styled-components';
import spinner from './spinner.svg';

// ______________________________________________________
//
// @ Types
type Props = { className?: string };

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <img src={spinner} className={props.className} alt="spinner" />
  </>
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
