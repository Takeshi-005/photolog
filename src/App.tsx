import React from 'react';
import AuthProvider from 'hooks/useAuth/provider';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import Header from 'components/container/organisms/Header';
import Footer from 'components/container/organisms/Footer';
import styled from 'styled-components';

const App: React.FC<{ className?: string }> = props => {
  return (
    <AuthProvider>
      <div className={props.className}>
        <Header />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default styled(App)`
  margin: 0;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;
