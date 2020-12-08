import React from 'react';
import { Context } from './context';
import useHooks from './hooks';

// ______________________________________________________
//
// @ Types

const AuthProvider: React.FC = props => {
  const { currentUser } = useHooks();

  return (
    <Context.Provider value={{ currentUser }}>
      {props.children}
    </Context.Provider>
  );
};

export const useAuth = () => React.useContext(Context);

export default AuthProvider;
