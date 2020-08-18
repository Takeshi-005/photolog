import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import FlexInput from 'components/presentational/molecules/FlexInput';
import Input from 'components/presentational/atoms/Input';
import Button from 'components/presentational/atoms/Button/Primary';
import Lv1 from 'components/presentational/atoms/Heading/Lv1';
import useLogin from 'hooks/useLogin';
import { PAGE_PATH } from 'constants/path';
import { DEVICE } from 'styles/style';
import { createUser } from 'firestore/createUser';
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
  handleSubmit: () => void;
  text: {
    h1: string;
    button: string;
  };
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [values, setValues] = React.useState(initilstate);
  const { handleLogin } = useLogin();

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

  const handleSubmit = React.useCallback(async () => {
    if (props.location.pathname === PAGE_PATH.login) {
      handleLogin(values.email, values.password).then(() =>
        props.history.replace(PAGE_PATH.calendar)
      );
    } else {
      createUser(values.email, values.password).finally(() =>
        props.history.replace(PAGE_PATH.calendar)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.path, values.email, values.password]);

  return (
    <StyledComponent
      {...props}
      values={values}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      text={{
        h1:
          props.location.pathname === PAGE_PATH.login
            ? 'ログイン'
            : 'サインアップ',
        button:
          props.location.pathname === PAGE_PATH.login
            ? 'ログインする'
            : '登録する'
      }}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Lv1 text={props.text.h1} />
    <FlexInput value={props.values.email}>
      <Input
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        handleKeyPress={props.handleSubmit}
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
        handleKeyPress={props.handleSubmit}
        type="password"
        value={props.values.password}
        name={formName.password}
        placeholder="6文字以上の半角英数字"
      />
    </FlexInput>
    <div className="submit-area">
      <Button
        text={props.text.button}
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
  padding: 20px;

  @media ${DEVICE.mobile} {
    width: 100%;
    padding: 0 8px;
  }

  > .submit-area {
    margin-top: 16px;
  }
`;

export default Container;
