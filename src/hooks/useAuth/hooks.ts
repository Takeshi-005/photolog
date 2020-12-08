import React from 'react';
import { User } from 'firebase/app';
import firebase from '../../Firebase';

const useHooks = () => {
  const [currentUser, setCurrentUser] = React.useState<User | null | undefined>(
    undefined
  );

  React.useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(currentUser => {
      currentUser ? setCurrentUser(currentUser) : setCurrentUser(null);
    });

    return () => {
      console.log('clean up');
      unlisten();
    };
  }, []);

  return {
    currentUser
  };
};

export default useHooks;
