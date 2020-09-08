import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Wrapper from 'components/container/organisms/Layout/Wrapper';

// ______________________________________________________
//
// @ Types
type ContainerProps = RouteComponentProps & { className?: string };
type Props = ContainerProps & {};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <Wrapper className={props.className}>
    <p className="text">お気に入りのアイテムやお店のログを残そう</p>
  </Wrapper>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  > h1 {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  }

  > .text {
    font-size: 18px;
  }
`;

export default Container;
