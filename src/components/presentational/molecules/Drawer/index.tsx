import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import CloseIcon from '@material-ui/icons/Close';

//______________________________________________________
//
// @ Types
type ContainerProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type Props = ContainerProps & {
  animateStyle: React.CSSProperties;
  className?: string;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className} style={props.animateStyle}>
    <CloseIcon onClick={props.handleClose} className="close" />
    {props.children}
  </div>
);

//______________________________________________________
//
// @ AnimatedComponent
const AnimatedComponent: React.FC<ContainerProps> = props => {
  return (
    <Transition
      config={{
        mass: 1,
        tension: 40,
        friction: 10,
        duration: 300
      }}
      items={props.isOpen}
      from={{
        transform: 'translateX(-100vw)'
      }}
      enter={{
        transform: 'translateX(0px);'
      }}
      leave={{
        transform: 'translateX(-100vw)',
        pointerEvents: 'none'
      }}
      delay={1}
    >
      {show =>
        show &&
        (styles => (
          <Component {...props} animateStyle={styles as React.CSSProperties} />
        ))
      }
    </Transition>
  );
};

//______________________________________________________
//
// @ StyledComponent
export default styled(AnimatedComponent)`
  width: 400px;
  max-width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  z-index: 200;
  display: flex;
  flex-direction: column;

  > .close {
    position: absolute;
    font-size: 32px;
    top: 16px;
    right: 16px;
  }
`;
