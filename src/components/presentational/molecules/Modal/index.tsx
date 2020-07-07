import React from 'react';
import styled from 'styled-components';
import { State } from 'hooks/useModal';
import { Transition } from 'react-spring/renderprops';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  modalState: State;
  className?: string;
  handleClick?: () => void;
  style?: React.CSSProperties;
};

type Props = ContainerProps & {
  animateStyle?: React.CSSProperties;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = React.memo(props => (
  <div className={props.className}>
    <div className="content" style={props.animateStyle}>
      {props.children}
    </div>
    <div className="overlay" onClick={props.handleClick}></div>
  </div>
));

export const AnimatedComponent: React.FC<ContainerProps> = props => {
  return (
    <Transition
      config={{ duration: 200 }}
      items={props.modalState.isOpen}
      from={{
        opacity: 0,
        transform: 'translateY(100px)'
      }}
      enter={{ opacity: 1, transform: 'translateY(0px)' }}
      leave={{
        opacity: 0,
        transform: 'translateY(100px)',
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
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  justify-content: center;
  align-items: center;

  > .content {
    width: ${props => props.style?.width ?? '560px'};
    height: ${props => props.style?.height ?? 'auto'};
    border-radius: 8px;
    background: #fff;
    padding: 16px;
    position: relative;
    z-index: 101;
  }

  > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
`;
