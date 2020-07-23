import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

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
const Component: React.FC<Props> = () => <div>Profile</div>;

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)``;

export default Container;
