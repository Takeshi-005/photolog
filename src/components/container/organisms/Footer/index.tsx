import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @Component
export const Component: React.FC<{ className?: string }> = props => (
  <footer className={props.className}>
    © Photolog, Inc. All rights reserved.
  </footer>
);

export default styled(Component)`
  margin-top: auto;
  text-align: center;
  padding: 10px;
  border-top: 1px solid ${COLOR.border};
`;
