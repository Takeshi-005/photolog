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
import { DEVICE, COLOR } from 'styles/style';
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
    <h1>
      <Link to={PAGE_PATH.root}>PhotoLog</Link>
    </h1>
    {!props.isMobile && (
      <>
        <div className="button">
          {!props.currentUser ? (
            <>
              <Link to={PAGE_PATH.login}>
                <Button>Login</Button>
              </Link>
              <Link to={PAGE_PATH.signup}>
                <Button>Signup</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to={PAGE_PATH.calendar}>
                <Button>Calendar</Button>
              </Link>
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${DEVICE.mobile} {
    height: 60px;
  }

  > h1 {
    font-size: 24px;
    > a {
      color: ${COLOR.text};
    }
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

    > a:first-child {
      margin-right: 10px;
    }
  }
`;

export default Container;
