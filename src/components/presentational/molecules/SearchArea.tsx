import React from 'react';
import { AxiosError } from 'axios';
import styled from 'styled-components';
import Input from 'components/presentational/atoms/Input';
import Button from 'components/presentational/atoms/Button';
import ErrorMessage from 'components/presentational/atoms/ErrorMessage';

import { COLOR, DEVICE } from 'styles/style';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  error: AxiosError | null;
};
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
  <div className={props.className}>
    <form onSubmit={props.handleSubmit}>
      <OverrideInput
        value={props.value}
        placeholder="1000004"
        handleChange={props.handleChange}
        maxlength={7}
        style={{ width: '300px', height: '40px' }}
      />
      <OverrideButton style={{ width: '80px', height: '40px' }} text="検索" />
      {props.error && <ErrorMessage text="郵便番号が正しくありません" />}
    </form>
  </div>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  border: 1px solid ${COLOR.border};
  margin-top: 12px;
  padding: 8px;
  background: #1976d2;

  > form {
    display: flex;
  }
`;

const OverrideInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media ${DEVICE.mobile} {
    width: calc(100% - 80px);
  }
`;

const OverrideButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export default Container;
