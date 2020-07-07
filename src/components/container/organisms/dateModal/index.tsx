import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useModal, { State } from 'hooks/useModal';
import FlexInput from '../../../presentational/molecules/FlexInput';
import DateContainer from './DateContainer';
import DateInput from './DateInput';
import ImgPreview from './ImgPreview';
import ConfirmModal from './ConfirmModal';
import Modal from 'components/presentational/molecules/Modal';
import Input from 'components/presentational/atoms/Input';
import Select from 'components/presentational/atoms/Select';
import InputFile from 'components/presentational/atoms/InputFile';
import Button, { BUTTON_TYPE } from 'components/presentational/atoms/Button';
import AlbumIcon from '@material-ui/icons/Album';
import RoomIcon from '@material-ui/icons/Room';
import LinkIcon from '@material-ui/icons/Link';
import SubjectIcon from '@material-ui/icons/Subject';
import dateFormat from 'utils/dateFormat';
import compressor from 'utils/compressor';

// ______________________________________________________
//
// @Constants
const formName = {
  startDate: 'startDate',
  endDate: 'endDate',
  title: 'title',
  place: 'place',
  url: 'url',
  description: 'description',
  genre: 'genre',
  images: 'images'
} as const;

const initialState: {
  [key in FormName]: key extends 'images' ? Blob[] : string;
} = {
  startDate: '',
  endDate: '',
  title: '',
  place: '',
  url: '',
  description: '',
  genre: '',
  images: []
};

const options = {
  ジャンルを選択: '',
  アイテム: 'item',
  グルメ: 'gourmet'
};

// ______________________________________________________
//
// @Types
type ContainerProps = {
  modalState: State;
  date: Date;
  closeModal: () => void;
};

type Props = ContainerProps & {
  values: typeof initialState;
  modalState: State;
  handleChange: (name: string, value: string) => void;
  handleDelete: (name: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCloseModal: () => void;
  handleAllCloseModal: () => void;
  handleFileChange: () => void;
  useModal: {
    modalState: State;
    openModal: () => void;
    closeModal: () => void;
  };
  className?: string;
};
type FormName = keyof typeof formName;

// ______________________________________________________
//
// @Container
const Container: React.FC<ContainerProps> = props => {
  const end = (date: Date) => {
    return moment(date)
      .add(1, 'hour')
      .toDate();
  };

  const { modalState, openModal, closeModal } = useModal();
  const ref = React.createRef<HTMLInputElement>();

  const [values, setValue] = React.useState(initialState);

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
      newValues[name as Exclude<FormName, 'images'>] = value;

      return newValues;
    });
  }, []);

  const handleFileChange = React.useCallback(async () => {
    let result: Blob[] = [];
    if (ref.current && ref.current.files) {
      const files = Array.from(ref.current.files);
      result = await Promise.all(files.map(file => compressor(file)));
    }
    setValue(values => {
      const newValues = { ...values };
      newValues[formName.images] = result;

      return newValues;
    });
  }, [ref]);

  const handleDelete = React.useCallback((str: string) => {
    const name = str as FormName;
    setValue(form => {
      const newValues = { ...form };
      if (name === 'images') {
        newValues[name] = [];
      } else {
        newValues[name] = '';
      }

      return newValues;
    });
  }, []);

  const handleCloseModal = React.useCallback(() => {
    if (values.title !== '') {
      openModal();
    } else {
      setValue(initialState);
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
      handleFileChange={handleFileChange}
      useModal={{
        modalState,
        openModal,
        closeModal
      }}
      ref={ref}
    />
  );
};

//______________________________________________________
//
// @Component
const Component = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <>
    <Modal modalState={props.modalState} handleClick={props.handleCloseModal}>
      <div className={props.className}>
        <Input
          value={props.values.title}
          placeholder="タイトル"
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          name={formName.title}
          modifier={['big']}
        />
        <div className="inner">
          <DateContainer>
            <DateInput
              name={formName.startDate}
              tooltip="start"
              value={props.values.startDate}
              handleChange={props.handleChange}
            />
            〜
            <DateInput
              name={formName.endDate}
              tooltip="end"
              value={props.values.endDate}
              handleChange={props.handleChange}
            />
          </DateContainer>
          <FlexInput value={props.values.place}>
            <AlbumIcon />
            <Select
              value={props.values.genre}
              handleChange={props.handleChange}
              options={options}
              name={formName.genre}
            />
          </FlexInput>
          <FlexInput value={props.values.place}>
            <RoomIcon />
            <Input
              value={props.values.place}
              placeholder="場所を追加"
              handleChange={props.handleChange}
              handleDelete={props.handleDelete}
              name={formName.place}
              modifier={['flat']}
            />
          </FlexInput>
          <FlexInput value={props.values.url}>
            <LinkIcon />
            <Input
              value={props.values.url}
              placeholder="URLを追加"
              handleChange={props.handleChange}
              handleDelete={props.handleDelete}
              name={formName.url}
              modifier={['flat']}
            />
          </FlexInput>
          <FlexInput value={props.values.description}>
            <SubjectIcon />
            <Input
              value={props.values.description}
              placeholder="メモを追加"
              handleChange={props.handleChange}
              handleDelete={props.handleDelete}
              name={formName.description}
              modifier={['flat']}
            />
          </FlexInput>
          <FlexInput value={props.values.place}>
            <RoomIcon />
            <Input
              value={props.values.place}
              placeholder="場所を追加"
              handleChange={props.handleChange}
              handleDelete={props.handleDelete}
              name={formName.place}
              modifier={['flat']}
            />
          </FlexInput>
          <div className="photo-box">
            {!props.values.images[0] && (
              <InputFile ref={ref} handleChange={props.handleFileChange} />
            )}
            {props.values.images.map((image, i) => (
              <ImgPreview
                key={i}
                file={image}
                name={formName.images}
                handleDelete={props.handleDelete}
              />
            ))}
          </div>
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
));

//______________________________________________________
//
// @StyledComponent
const StyledComponent = styled(Component)`

    > .inner {
      margin-top: 16px;

      .photo-box {

      }
    }

    > .bottom {
      margin-top: 8px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default Container;
