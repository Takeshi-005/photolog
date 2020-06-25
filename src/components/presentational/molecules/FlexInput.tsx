import React from 'react';
import styled from 'styled-components';
import Input, { Props } from 'components/presentational/atoms/Input';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => (
    <div className={props.className}>
      {props.children}
      <Input {...props} />
    </div>
  ),
  (p, n) => p.value === n.value && p.modifier === n.modifier
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;

  svg {
    fill: ${props => (props.value ? COLOR.primary : COLOR.unselected)};
  }
`;
