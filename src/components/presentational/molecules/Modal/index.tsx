import React from 'react';
import styled from 'styled-components';
import { State } from 'hooks/useModal';
import { useTransition, animated, AnimatedValue, config } from 'react-spring';

// ______________________________________________________
//
// @ Types
type ContainerProps = {
  modalState: State;
  className?: string;
  handleClick: () => void;
};

type Props = ContainerProps & {
  style: AnimatedValue<React.CSSProperties>;
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="content" style={props.style}>
      {props.children}
    </div>
    <div className="overlay" onClick={props.handleClick}></div>
  </div>
);

export const AnimatedComponent: React.FC<ContainerProps> = props => {
  const Element = animated(Component);

  const transitions = useTransition(0, item => item, {
    // ★
    unique: true,
    config: config.slow,
    from: {
      opacity: 0,
      transform: 'translateY(100px) '
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100px) '
    }
  });

  return (
    <>
      {props.modalState.isOpen && (
        <>
          {transitions.map(styles => (
            <Element key={styles.key} {...props} style={styles.props} />
          ))}
        </>
      )}
    </>
  );
};

//______________________________________________________
//
// @ StyledComponent
export default styled(AnimatedComponent)`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  display: ${props => (props.modalState.isOpen ? 'flex' : 'none')};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  justify-content: center;
  align-items: center;

  > .content {
    width: 500px;
    height: 400px;
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
