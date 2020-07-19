import React from 'react';
import firebase, { db } from '../Firebase';

const useCreateUser = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

  const handleSignup = React.useCallback(
    (email: string, password: string, name?: string) => {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user?.uid);
          db.collection('users')
            .doc(res.user?.uid)
            .set({
              name: name ?? '',
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            })
            .then(function() {
              console.log('Document successfully written!');
            })
            .catch(function(error) {
              console.error('Error writing document: ', error);
            });
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
    },
    []
  );

  return {
    isLoading,
    handleSignup
  };
};

export default useCreateUser;
