import React from 'react';
import { createUser } from 'firestore/createUser';
const useCreateUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignup = React.useCallback((email: string, password: string) => {
    setIsLoading(true);

    createUser(email, password).finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    handleSignup
  };
};

export default useCreateUser;
