import React from 'react';
import firebase from '../Firebase';

const useCreateUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignup = React.useCallback((email: string, password: string) => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        setIsLoading(false);
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setIsLoading(false);
        throw new Error(error);
      });
  }, []);

  return {
    isLoading,
    handleSignup
  };
};

export default useCreateUser;
