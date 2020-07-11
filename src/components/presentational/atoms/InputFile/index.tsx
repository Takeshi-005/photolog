import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

//______________________________________________________
//
// @Types
type Props = {
  /** ファイル種類指定 */
  accept?: string;
  /** 複数ファイル選択 */
  multiple?: boolean;
  className?: string;
  handleChange?: () => void;
};

//______________________________________________________
//
// @Component
export const Component = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => (
    <StyledComponent {...props}>
      <input
        type="file"
        onChange={props.handleChange}
        accept={props.accept ?? ''}
        ref={ref}
        multiple={props.multiple ?? false}
      />
      <AddAPhotoIcon />
    </StyledComponent>
  )
);

//______________________________________________________
//
// @StyledComponent
const StyledComponent = styled.label<Props>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLOR.border};
  border-radius: 8px;
  cursor: pointer;

  > svg {
    fill: ${COLOR.gray};
  }

  > input {
    display: none;
  }
`;

export default Component;
