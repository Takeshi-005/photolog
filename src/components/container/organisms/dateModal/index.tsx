import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useModal, { State } from 'hooks/useModal';
import IconInput from './FlexInput';
import DateContainer from './DateContainer';
import DateInput from './DateInput';
import ConfirmModal from './ConfirmModal';
import Modal from 'components/presentational/molecules/Modal';
import Input from 'components/presentational/atoms/Input';
import Button, { BUTTON_TYPE } from 'components/presentational/atoms/Button';
import RoomIcon from '@material-ui/icons/Room';
import LinkIcon from '@material-ui/icons/Link';
import SubjectIcon from '@material-ui/icons/Subject';
import dateFormat from 'utils/dateFormat';

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
  modalState: State;
  handleChange: (name: string, value: string) => void;
  handleDelete: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCloseModal: () => void;
  handleAllCloseModal: () => void;
  useModal: {
    modalState: State;
    openModal: () => void;
    closeModal: () => void;
  };
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

const initialState = {
  startDate: '',
  endDate: '',
  title: '',
  place: '',
  url: '',
  description: ''
};

// ______________________________________________________
//
// @ Container
const Container: React.FC<ContainerProps> = props => {
  const end = (date: Date) => {
    return moment(date)
      .add(1, 'hour')
      .toDate();
  };

  const { modalState, openModal, closeModal } = useModal();

  const [values, setValue] = React.useState<Form>(initialState);

  React.useEffect(() => {
    setValue(values => {
      const newValues = { ...values };
      newValues['startDate'] = dateFormat(props.date);
      newValues['endDate'] = dateFormat(end(props.date));

      return newValues;
    });
  }, [props.date]);

  const handleChange = React.useCallback((name: string, value: string) => {
    setValue(values => {
      const newValues = { ...values };
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

  const handleCloseModal = React.useCallback(() => {
    if (values.title !== '') {
      openModal();
    } else {
      props.closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.title]);

  const handleSubmit = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // eslint-disable-next-line no-console
      console.log(e);
    },
    []
  );

  const handleAllCloseModal = React.useCallback(() => {
    closeModal();
    props.closeModal();
    setValue(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeModal]);

  return (
    <StyledComponent
      {...props}
      values={values}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      handleCloseModal={handleCloseModal}
      handleAllCloseModal={handleAllCloseModal}
      useModal={{
        modalState,
        openModal,
        closeModal
      }}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <>
    <Modal modalState={props.modalState} handleClick={props.handleCloseModal}>
      <div className={props.className}>
        <Input
          value={props.values.title}
          placeholder="イベント名"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={FormName.title}
          modifier={['big']}
        />
        <div className="inner">
          <DateContainer>
            <DateInput
              name={FormName.startDate}
              tooltip="start"
              value={props.values.startDate}
              handleChange={props.handleChange}
            />
            〜
            <DateInput
              name={FormName.endDate}
              tooltip="end"
              value={props.values.endDate}
              handleChange={props.handleChange}
            />
          </DateContainer>
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
            types={
              `${
                props.values.title !== '' ? 'primary' : 'disabled'
              }` as keyof typeof BUTTON_TYPE
            }
            style={{ width: '100px' }}
            handleClick={props.handleSubmit}
          />
        </div>
      </div>
    </Modal>
    <Modal
      modalState={props.useModal.modalState}
      style={{
        height: '200px',
        width: '480px'
      }}
    >
      <ConfirmModal
        handleAllCloseModal={props.handleAllCloseModal}
        handleCloseModal={props.useModal.closeModal}
      />
    </Modal>
  </>
);

//______________________________________________________
//
// @ StyledComponent
const StyledComponent = styled(Component)`

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
