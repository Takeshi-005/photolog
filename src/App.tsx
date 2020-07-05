import React from 'react';
import AuthProvider from 'hooks/useAuth/provider';
import { RouteWithSubRoutes } from './routes/RouteWithSubRoutes';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routes } from './routes/routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
