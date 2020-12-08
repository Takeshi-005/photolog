import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { COLOR } from 'styles/style';
import { useAuth } from 'hooks/useAuth/provider';
import useLogin from 'hooks/useLogin';

//______________________________________________________
//
// @ Types
type ContainerProps = {
  closeDrawer: () => void;
  className?: string;
};

type Props = ContainerProps & {
  currentUser: boolean;
  handleLogout: () => void;
};

//______________________________________________________
//
// @ Comtainer
const Container: React.FC<ContainerProps> = props => {
  const { currentUser } = useAuth();
  const { handleLogout } = useLogin();

  return (
    <StyledComponent
      {...props}
      currentUser={currentUser ? true : false}
      handleLogout={handleLogout}
    />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.currentUser ? (
      <>
        <ul>
          <li>
            <Link to={PAGE_PATH.calendar} onClick={props.closeDrawer}>
              <span>Calendar</span>
              <em>ログを登録する</em>
            </Link>
          </li>
          <li>
            <Link to={PAGE_PATH.calendar} onClick={props.closeDrawer}>
              <span>Profile</span>
              <em>プロフィールを確認/変更する</em>
            </Link>
          </li>
        </ul>
        <div className="logout" onClick={props.handleLogout}>
          <span>ログアウト</span>
        </div>
      </>
    ) : (
      <ul>
        <li>
          <Link to={PAGE_PATH.login} onClick={props.closeDrawer}>
            <span>ログイン</span>
            <em>アカウントをお持ちの方</em>
          </Link>
        </li>
        <li>
          <Link to={PAGE_PATH.signup} onClick={props.closeDrawer}>
            <span>サインアップ</span>
            <em>アカウント登録</em>
          </Link>
        </li>
      </ul>
    )}
  </div>
);

//______________________________________________________
//
// @ StyledComponent
export const StyledComponent = styled(Component)`
  padding: 60px 10px 20px;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;

  .logout {
    margin-top: auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLOR.border};
  }

  > ul {
    width: 100%;
    li {
      border-top: 1px solid ${COLOR.border};

      &:first-child {
        border-top: none;
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;

        > span {
          color: ${COLOR.primary};
        }

        > em {
          color: ${COLOR.note};
          font-style: normal;
          font-size: 12px;
        }
      }
    }
  }
`;

export default Container;
