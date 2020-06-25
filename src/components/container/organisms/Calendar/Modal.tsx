import React from 'react';
import styled from 'styled-components';
import { State } from 'hooks/useModal';
import IconInput from 'components/presentational/molecules/FlexInput';
import Input from 'components/presentational/atoms/Input';
import Button from 'components/presentational/atoms/Button';
import RoomIcon from '@material-ui/icons/Room';
import LinkIcon from '@material-ui/icons/Link';
import SubjectIcon from '@material-ui/icons/Subject';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  className?: string;
  modalState: State;
  closeModal: () => void;
};
type Props = ContainerProps & {
  form: Form;
  handleChange: (name: string, value: string) => void;
  handleDelete: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

enum FormName {
  title = 'title',
  place = 'place',
  url = 'url',
  description = 'description'
}

type Form = {
  [FormName.title]: string;
  [FormName.place]: string;
  [FormName.url]: string;
  [FormName.description]: string;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const [values, setValue] = React.useState<Form>({
    [FormName.title]: '',
    [FormName.place]: '',
    [FormName.url]: '',
    [FormName.description]: ''
  });

  const handleChange = React.useCallback((name: string, value: string) => {
    setValue(form => {
      const newValues = { ...form };
      newValues[name as keyof Form] = value;

      return newValues;
    });
  }, []);

  const handleDelete = React.useCallback((name: string) => {
    setValue(form => {
      const newValues = { ...form };
      newValues[name as keyof Form] = '';

      return newValues;
    });
  }, []);

  const handleSubmit = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    []
  );

  return (
    <StyledComponent
      {...props}
      form={values}
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
    <div className="content">
      <Input
        value={props.form.title}
        placeholder="イベント名"
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        name={FormName.title}
        modifier="big"
      />
      <div className="inner">
        <IconInput
          value={props.form.place}
          placeholder="場所を追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.place}
          modifier="flat"
        >
          <RoomIcon />
        </IconInput>
        <IconInput
          value={props.form.url}
          placeholder="URLを追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.url}
          modifier="flat"
        >
          <LinkIcon />
        </IconInput>
        <IconInput
          value={props.form.description}
          placeholder="説明を追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.description}
          modifier="flat"
        >
          <SubjectIcon />
        </IconInput>
      </div>
      <div className="bottom">
        <Button
          text="保存する"
          types="primary"
          style={{ width: '100px' }}
          handleClick={props.handleSubmit}
        />
      </div>
    </div>
    <div className="overlay" onClick={props.closeModal}></div>
  </div>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`
  background: rgba(0, 0, 0, 0.7);
  display: ${props => (props.modalState.isOpen ? 'block' : 'none')};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
  }

  > .content {
    width: 500px;
    height: 400px;
    background: #fff;
    padding: 16px;
    position: relatie;
    z-index: 10001;

    > .inner {
      margin-top: 16px;
    }

    > .bottom {
      margin-top: 8px;
      text-align: right;
    }
  }
`;

export default Container;
