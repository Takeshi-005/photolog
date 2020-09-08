import firebase, { auth, db } from '../Firebase';

export const createUser = async (
  email: string,
  password: string,
  name?: string
) => {
  const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      db.collection('users')
        .doc(res.user?.uid)
        .set({
          name: name ?? '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
    })
    .catch(function(error) {
      // Handle Errors here.
      throw new Error(error);
    });
};
