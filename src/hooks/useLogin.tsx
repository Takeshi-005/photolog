import React from 'react';
import { auth } from '../Firebase';

const useLogin = () => {
  const handleLogin = React.useCallback(
    async (email: string, password: string) => {
      await auth
        .signInWithEmailAndPassword(
          email.toString().trim(),
          password.toString().trim()
        )
        .catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode}${errorMessage}`);

          throw new Error(error);
        });
    },
    []
  );

  const handleLogout = React.useCallback(() => {
    auth
      .signOut()
      .then(() => {})
      .catch(function(error) {
        throw new Error(error);
      });
  }, []);

  return {
    handleLogin,
    handleLogout
  };
};

export default useLogin;
