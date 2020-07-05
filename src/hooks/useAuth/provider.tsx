import React from 'react';
import { Context } from './context';
import useAuth from './useAuth';

// ______________________________________________________
//
// @ Types

const AuthProvider: React.FC = props => {
  const { currentUser } = useAuth();

  return (
    <Context.Provider value={{ currentUser }}>
      {props.children}
    </Context.Provider>
  );
};

export default AuthProvider;
