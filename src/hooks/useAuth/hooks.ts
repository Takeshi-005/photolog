import React from 'react';
import { User } from 'firebase/app';
import firebase from '../../Firebase';

const useHooks = () => {
  const [currentUser, setCurrentUser] = React.useState<User | null | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return {
    currentUser
  };
};

export default useHooks;