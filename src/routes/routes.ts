import React from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { PAGE_PATH } from '../constants/path';

// Pages
import Home from 'components/container/Pages/Home';
import Calendar from 'components/container/Pages/Calendar';
import Profile from 'components/container/Pages/User/Profile';
import LoginSingup from 'components/container/Pages/LoginSignup';
import NotFound from 'components/container/Pages/404';

type PropsWithRoutes = RouteComponentProps<{}> & {
  routes: MyRouteProps[];
};

export type MyRouteProps = RouteProps & {
  component: React.FC<PropsWithRoutes>;
  path: string;
  exact?: boolean;
  naviText?: string;
  isAuth?: boolean;
  routes?: MyRouteProps[];
};

export const routes: MyRouteProps[] = [
  {
    path: PAGE_PATH.root,
    exact: true,
    component: Home,
    naviText: 'Home'
  },
  {
    path: PAGE_PATH.signup,
    exact: true,
    isAuth: false,
    component: LoginSingup,
    naviText: 'サインアップ'
  },
  {
    path: PAGE_PATH.login,
    exact: true,
    isAuth: false,
    component: LoginSingup,
    naviText: 'ログイン'
  },
  {
    path: PAGE_PATH.calendar,
    exact: true,
    isAuth: true,
    component: Calendar,
    naviText: 'カレンダー'
  },
  {
    path: PAGE_PATH.profile,
    exact: true,
    isAuth: false,
    component: Profile,
    naviText: 'プロフィール'
  },
  {
    path: '*',
    component: NotFound
  }
];
