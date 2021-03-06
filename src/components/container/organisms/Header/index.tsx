import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import useDrawer from 'hooks/useDrawer';
import Button from 'components/presentational/atoms/Button';
import DrawerContent from './Drawer';
import Drawer from 'components/presentational/molecules/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import useMedia from 'hooks/useMedia';
import { DEVICE } from 'styles/style';
import { Context as AuthContext } from 'hooks/useAuth/context';
import useLogin from 'hooks/useLogin';

//______________________________________________________
//
// @Types

type Props = {
  openDrawer: (passVals?: {}) => void;
  closeDrawer: () => void;
  handleLogout: () => void;
  isOpen: boolean;
  isMobile: boolean;
  currentUser: firebase.User | null | undefined;
  className?: string;
};

// ______________________________________________________
//
// @ Container
const Container: React.FC = () => {
  const { drawerState, closeDrawer, openDrawer } = useDrawer(false);
  const { isMobile } = useMedia();
  const { currentUser } = React.useContext(AuthContext);
  const { handleLogout } = useLogin();

  return (
    <StyledComponent
      openDrawer={openDrawer}
      closeDrawer={closeDrawer}
      isOpen={drawerState.isOpen}
      isMobile={isMobile}
      currentUser={currentUser}
      handleLogout={handleLogout}
    />
  );
};

//______________________________________________________
//
// @Component
export const Component: React.FC<Props> = props => (
  <header className={props.className}>
    <MenuIcon className="hamburger" onClick={props.openDrawer} />
    {!props.isMobile && (
      <>
        <div className="button">
          {!props.currentUser ? (
            <>
              <Button>
                <Link to={PAGE_PATH.login}>Login</Link>
              </Button>
              <Button>
                <Link to={PAGE_PATH.signup}>Signup</Link>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link to={PAGE_PATH.calendar}>Calendar</Link>
              </Button>
              <Button handleClick={props.handleLogout} text="ログアウト" />
            </>
          )}
        </div>
      </>
    )}
    <Drawer isOpen={props.isOpen} handleClose={props.closeDrawer}>
      <DrawerContent closeDrawer={props.closeDrawer} />
    </Drawer>
  </header>
);

//______________________________________________________
//
// @StyledComponent
const StyledComponent = styled(Component)`
  position: relative;
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;
  transition: background-color 0.25s ease-in-out 0s, box-shadow, color;
  @media ${DEVICE.mobile} {
    height: 60px;
  }

  > .hamburger {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    font-size: 32px;
  }

  > .button {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    > button:first-child {
      margin-right: 10px;
    }
  }
`;

export default Container;
