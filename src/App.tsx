import React from 'react';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import Header from 'components/container/organisms/Header';
import Footer from 'components/container/organisms/Footer';
import styled from 'styled-components';
import { Context as AuthContext } from 'hooks/useAuth/context';
import Spinner from 'components/presentational/atoms/Spinner';

const App: React.FC<{ className?: string }> = props => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <>
      {currentUser === undefined ? (
        <Spinner />
      ) : (
        <div className={props.className}>
          <Header />
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
          <Footer />
        </div>
      )}
    </>
  );
};

export default styled(App)`
  margin: 0;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;
