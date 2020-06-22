import React from 'react';
import styled from 'styled-components';
import { COLOR, DEVICE } from 'styles/style';

// ______________________________________________________
//
// @ Types
type Props = {
  title: string;
  text: string;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(
  props => (
    <dl className={props.className}>
      <dt>{props.title}</dt>
      <dd>{props.text}</dd>
    </dl>
  ),
  (p, n) => p.text === n.text && p.title === n.title
);

//______________________________________________________
//
// @ StyledComponent
export default styled(Component)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLOR.border};
  padding: 8px;

  > dt {
    width: 160px;
    font-weight: 700;
    @media ${DEVICE.mobile} {
      width: 100px;
    }
  }

  > dd {
    width: calc(100% - 160px);
    @media ${DEVICE.mobile} {
      width: calc(100% - 100px);
    }
  }
`;
