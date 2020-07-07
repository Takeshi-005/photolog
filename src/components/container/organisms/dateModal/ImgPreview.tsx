import React from 'react';
import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { COLOR } from 'styles/style';

//______________________________________________________
//
// @Types

type ContainerProps = {
  file: Blob;
  name: string;
  handleDelete: (name: string) => void;
};

type Props = ContainerProps & {
  className?: string;
  src: string | undefined;
};

//______________________________________________________
//
// @Conteinar
const Container: React.FC<ContainerProps> = props => {
  const [src, setSrc] = React.useState<string | ArrayBuffer | null>(null);
  const reader = new FileReader();
  reader.readAsDataURL(props.file);
  reader.onload = () => setSrc(reader.result);

  return <StyledComponent {...props} src={src?.toString()} />;
};

//______________________________________________________
//
// @Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <HighlightOffIcon onClick={() => props.handleDelete(props.name)} />
    {props.src && <img src={props.src} alt="" />}
  </div>
);

//______________________________________________________
//
// @StyledComponent
const StyledComponent = styled(Component)`
  width: 80px;
  height: 80px;
  position: relative;
  border: 1px solid ${COLOR.border};
  border-radius: 4px;
  > svg {
    position: absolute;
    right: 0;
    top: -4px;
  }
  > img {
    width: 100%;
    border-radius: 4px;
  }
`;

export default Container;
