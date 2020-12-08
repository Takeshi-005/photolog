import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { COLOR } from 'styles/style';
import { useAuth } from 'hooks/useAuth/provider';

//______________________________________________________
//
// @ Types
type ContainerProps = {
  className?: string;
};

type Props = ContainerProps & {
  currentUser: boolean;
};

//______________________________________________________
//
// @ Comtainer
const Container: React.FC<ContainerProps> = props => {
  const { currentUser } = useAuth();

  return (
    <StyledComponent {...props} currentUser={currentUser ? true : false} />
  );
};

//______________________________________________________
//
// @ Component
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.currentUser ? (
      <div></div>
    ) : (
      <ul>
        <li>
          <Link to={PAGE_PATH.login}>
            <span>ログイン</span>
            <em>アカウントをお持ちの方</em>
          </Link>
        </li>
        <li>
          <Link to={PAGE_PATH.signup}>
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

  > ul {
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
