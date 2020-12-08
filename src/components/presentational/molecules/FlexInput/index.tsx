import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @ Component
const Component: React.FC<{ className?: string; value: string }> = React.memo(
  props => <div className={props.className}>{props.children}</div>,
  (p, n) => p.value === n.value
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  align-items: center;

  * + & {
    margin-top: 6px;
  }

  svg {
    padding-right: 4px;
    fill: ${props => (props.value ? COLOR.primary : COLOR.unselected)};
  }
`;
