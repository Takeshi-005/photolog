import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import FlexInput from 'components/presentational/molecules/FlexInput';
import Input from 'components/presentational/atoms/Input';
import Button from 'components/presentational/atoms/Button';
import useLogin from 'hooks/useLogin';
import useCreateUser from 'hooks/useCreateUser';
import { PAGE_PATH } from 'constants/path';
// ______________________________________________________
//
// @ Constants
const formName = {
  email: 'email',
  password: 'password'
} as const;

const initilstate: { [key in Form]: string } = {
  email: '',
  password: ''
};

// ______________________________________________________
//
// @ Types
type Form = keyof typeof formName;

type ContainerProps = RouteComponentProps & { className?: string };
type Props = ContainerProps & {
  values: typeof initilstate;
  handleChange: (name: string, value: string) => void;
  handleDelete: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [values, setValues] = React.useState(initilstate);
  const { handleLogin } = useLogin();
  const { handleSignup } = useCreateUser();

  const handleChange = React.useCallback((name: string, value: string) => {
    setValues(values => {
      const newValues = { ...values };
      newValues[name as Form] = value;

      return newValues;
    });
  }, []);

  const handleDelete = React.useCallback((name: string) => {
    setValues(value => {
      const newValues = { ...value };
      newValues[name as Form] = '';

      return newValues;
    });
  }, []);

  const handleSubmit = React.useCallback(() => {
    console.log(values);
    if (props.location.pathname === PAGE_PATH.login)
      handleLogin(values.email, values.password);
    else handleSignup(values.email, values.password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.path, values.email, values.password]);

  return (
    <StyledComponent
      {...props}
      values={values}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <FlexInput value={props.values.email}>
      <Input
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        type="email"
        value={props.values.email}
        name={formName.email}
        placeholder="メールアドレス"
      />
    </FlexInput>
    <FlexInput value={props.values.password}>
      <Input
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        type="password"
        value={props.values.password}
        name={formName.password}
        placeholder="8文字以上の半角英数字"
      />
    </FlexInput>
    <div className="submit-area">
      <Button
        text="登録する"
        types="primary"
        handleClick={props.handleSubmit}
        style={{ width: '100%' }}
      />
    </div>
  </div>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  width: 500px;
  margin: 0 auto;

  > .submit-area {
    margin-top: 16px;
  }
`;

export default Container;
