import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import AuthProvider from 'hooks/useAuth/provider';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
