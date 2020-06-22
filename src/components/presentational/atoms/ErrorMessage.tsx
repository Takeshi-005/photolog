import React from 'react';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types
type Props = {
  text: string;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => <p className={props.className}>{props.text}</p>,
  (p, n) => p.text === n.text
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  color: #fff;
  font-weight: 700;
`;
