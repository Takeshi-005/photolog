import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Wrapper from '../organisms/Layout/Wrapper';

// ______________________________________________________
//
// @ Types
type Props = RouteComponentProps & { className?: string };

//______________________________________________________
//
// @ Component
export const Component: React.FC<Props> = props => (
  <Wrapper className={props.className}>
    ページが見つかりませんでした。
    <br />
    お探しのページはアドレスが間違っているか、
    <br />
    削除された可能性がありませす。
  </Wrapper>
);

export default styled(Component)`
  padding: 24px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
