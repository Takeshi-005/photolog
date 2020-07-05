import React from 'react';
import { MyRouteProps } from './routes';
import { Route, Redirect } from 'react-router-dom';
import { Context as AuthContext } from 'hooks/useAuth/context';
import Spinner from 'components/presentational/atoms/Spinner';

export const RouteWithSubRoutes = (route: MyRouteProps) => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <>
      {currentUser === undefined ? (
        <Spinner />
      ) : (
        <>
          {route.isAuth && currentUser === null ? (
            <>
              <Redirect
                to={{
                  pathname: '/'
                }}
              />
            </>
          ) : (
            <>
              <Route
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} routes={route.routes ?? []} />
                )}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
