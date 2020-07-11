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
//______________________________________________________
//
// @Types

type Props = { className?: string };

//______________________________________________________
//
// @Component
export const Component: React.FC<Props> = props => {
  const { drawerState, closeDrawer, drawerContent, openDrawer } = useDrawer(
    DrawerContent,
    false
  );
  const { isMobile } = useMedia();

  return (
    <header className={props.className}>
      <MenuIcon className="hamburger" onClick={openDrawer} />
      {!isMobile && (
        <div className="button">
          <Button>
            <Link to={PAGE_PATH.login}>Login</Link>
          </Button>
          <Button>
            <Link to={PAGE_PATH.signup}>Signup</Link>
          </Button>
        </div>
      )}
      <Drawer isOpen={drawerState.isOpen} handleClose={closeDrawer}>
        {drawerContent}
      </Drawer>
    </header>
  );
};

//______________________________________________________
//
// @StyledComponent
const styledComponent = styled(Component)`
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

export default styledComponent;
