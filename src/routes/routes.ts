import React from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { PAGE_PATH } from '../constants/path';

// Pages
import Home from 'components/container/Pages/Home';
import Calendar from 'components/container/Pages/Calendar';
import Signup from 'components/container/Pages/Signup';
import Login from 'components/container/Pages/Login';

type PropsWithRoutes = RouteComponentProps<{}> & {
  routes: MyRouteProps[];
};

export type MyRouteProps = RouteProps & {
  component: React.FC<PropsWithRoutes>;
  naviText?: string;
  isAuth?: boolean;
  path: string;
  exact: boolean;
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
    component: Signup,
    naviText: 'サインアップ'
  },
  {
    path: PAGE_PATH.login,
    exact: true,
    isAuth: false,
    component: Login,
    naviText: 'ログイン'
  },
  {
    path: PAGE_PATH.calendar,
    exact: true,
    isAuth: true,
    component: Calendar,
    naviText: 'カレンダー'
  }
];
