import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import Wrapper from '../../organisms/Layout/Wrapper';
import Lv1 from 'components/presentational/atoms/Heading/Lv1';
import Button from 'components/presentational/atoms/Button';
import { COLOR } from 'styles/style';

// ______________________________________________________
//
// @ Types
type ContainerProps = RouteComponentProps & { className?: string };
type Props = ContainerProps & {};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  return <Component {...props} />;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <Wrapper className={props.className}>
    <Lv1 text="Profile" />
    <dl>
      <dt>ネーム</dt>
      <dd></dd>
    </dl>
    <dl>
      <dt>アイコン画像</dt>
      <dd></dd>
    </dl>
    <Button className="btn" text="プロフィールを更新する" />
  </Wrapper>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Container)`
  > dl {
    border-bottom: 1px solid ${COLOR.border};
    display: flex;
    font-size: 18px;
    padding: 8px 0 4px;
  }
  > .btn {
    margin-top: 20px;
    display: inline-block;
  }
`;

export default StyledComponent;
