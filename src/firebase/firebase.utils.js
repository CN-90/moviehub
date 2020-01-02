import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAeek1H9agNqIzqAS2zBTO67hpy__0dtP8',
  authDomain: 'movie-hub-9bcc9.firebaseapp.com',
  databaseURL: 'https://movie-hub-9bcc9.firebaseio.com',
  projectId: 'movie-hub-9bcc9',
  storageBucket: 'movie-hub-9bcc9.appspot.com',
  messagingSenderId: '251463423211',
  appId: '1:251463423211:web:fcee0853ba752348f69aae',
  measurementId: 'G-0MVRV7DBQG'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
