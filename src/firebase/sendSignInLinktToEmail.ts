import firebase from 'firebase/app';

export const sendSignInLinkToEmail = (email: string) => {
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: process.env.REACT_APP_AUTH_DOMAIN as string,
    // This must be true.
    handleCodeInApp: true,
    dynamicLinkDomain: 'example.page.link'
  };
  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch(function(error) {
      throw new Error(error);
    });
};
