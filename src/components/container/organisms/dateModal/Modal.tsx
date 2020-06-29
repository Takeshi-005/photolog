import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { State } from 'hooks/useModal';
import IconInput from './FlexInput';
import DateInput from './DateContainer';
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
  date: Date;
  closeModal: () => void;
};
type Props = ContainerProps & {
  values: Form;
  handleChange: (name: string, value: string) => void;
  handleDelete: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const FormName = {
  startDate: 'startDate',
  endDate: 'endDate',
  title: 'title',
  place: 'place',
  url: 'url',
  description: 'description'
} as const;

type Form = {
  startDate: string;
  endDate: string;
  title: string;
  place: string;
  url: string;
  description: string;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const end = moment(props.date).add(1, 'hour');

  const [values, setValue] = React.useState<Form>({
    startDate: moment(props.date).format('YYYY年MM月DD日 HH:mm'),
    endDate: end.format('YYYY年MM月DD日 HH:mm'),
    title: '',
    place: '',
    url: '',
    description: ''
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
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // eslint-disable-next-line no-console
      console.log(e);
    },
    []
  );

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
    <div className="content">
      <Input
        value={props.values.title}
        placeholder="イベント名"
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        name={FormName.title}
        modifier={['big']}
      />
      <div className="inner">
        <DateInput
          startDate={props.values.startDate}
          endDate={props.values.endDate}
        />
        <IconInput
          value={props.values.place}
          placeholder="場所を追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.place}
        >
          <RoomIcon />
        </IconInput>
        <IconInput
          value={props.values.url}
          placeholder="URLを追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.url}
        >
          <LinkIcon />
        </IconInput>
        <IconInput
          value={props.values.description}
          placeholder="説明を追加"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.description}
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
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default Container;
