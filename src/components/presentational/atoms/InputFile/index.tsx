import React from 'react';
import styled from 'styled-components';
// import { COLOR } from 'styles/style';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

//______________________________________________________
//
// @Types
type Props = {
  className?: string;
  handleChange?: () => void;
};

//______________________________________________________
//
// @Component
export const Component = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => (
    <label className={props.className}>
      <input type="file" onChange={props.handleChange} ref={ref} />
      <AddAPhotoIcon />
    </label>
  )
);

//______________________________________________________
//
// @StyledComponent
export default styled(Component)`
  > input {
    display: none;
  }
`;
