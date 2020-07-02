import React from 'react';
import styled from 'styled-components';
import Button from 'components/presentational/atoms/Button';

//______________________________________________________
//
// @Types
type Props = {
  className?: string;
  handleAllCloseModal: () => void;
  handleCloseModal: () => void;
};

//______________________________________________________
//
// @Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <p className="title">
      入力した内容は失われます。
      <br />
      キャンセルしてもよろしいですか？
    </p>
    <div className="button-area">
      <Button text="キャンセル" handleClick={props.handleCloseModal} />
      <Button
        types="primary"
        text="ok"
        style={{
          width: '100px'
        }}
        handleClick={props.handleAllCloseModal}
      />
    </div>
  </div>
);

//______________________________________________________
//
// @StyledComponent
export default styled(Component)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > .title {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }

  > .button-area {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button + button {
      margin-left: 8px;
    }
  }
`;
