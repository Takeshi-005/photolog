import React from 'react';
import firebase from '../Firebase';

const useLogin = () => {
  const [isLoading, setisLoading] = React.useState(false);

  const handleLogin = React.useCallback((email: string, password: string) => {
    setisLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setisLoading(false);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}${errorMessage}`);
        setisLoading(false);

        throw new Error(error);
      });
  }, []);

  const handleLogout = React.useCallback(() => {
    setisLoading(true);

    firebase
      .auth()
      .signOut()
      .then(() => {
        setisLoading(false);
      })
      .catch(function(error) {
        setisLoading(false);
        throw new Error(error);
      });
  }, []);

  return {
    isLoading,
    handleLogin,
    handleLogout
  };
};

export default useLogin;
