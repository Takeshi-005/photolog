import React from 'react';
import styled from 'styled-components';
import { CONTENT_WIDTH } from 'constants/config';

//______________________________________________________
//
// @ Component
const Component: React.FC<{ className?: string }> = props => (
  <div className={props.className}>{props.children}</div>
);

//______________________________________________________
//
// @ StyledComponent

export default styled(Component)`
  max-width: ${CONTENT_WIDTH + 40}px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 0 20px;
`;
