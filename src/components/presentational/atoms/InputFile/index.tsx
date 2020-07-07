import React from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/style';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

//______________________________________________________
//
// @Types
type Props = {
  className?: string;
  accept?: string;
  multiple?: boolean;
  handleChange?: () => void;
};

//______________________________________________________
//
// @Component
export const Component = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => (
    <label className={props.className}>
      <input
        type="file"
        onChange={props.handleChange}
        accept={props.accept ?? ''}
        ref={ref}
        multiple={props.multiple ?? false}
      />
      <AddAPhotoIcon />
    </label>
  )
);

//______________________________________________________
//
// @StyledComponent
export default styled(Component)`
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
