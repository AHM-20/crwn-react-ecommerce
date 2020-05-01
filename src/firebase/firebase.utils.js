import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyA2hqEOX7ZLas5p_pzWRzGj0oqbclLgqBo',
	authDomain: 'crwn-db-fd5a7.firebaseapp.com',
	databaseURL: 'https://crwn-db-fd5a7.firebaseio.com',
	projectId: 'crwn-db-fd5a7',
	storageBucket: 'crwn-db-fd5a7.appspot.com',
	messagingSenderId: '529308268331',
	appId: '1:529308268331:web:6c4e62b60bf74aa753376e',
	measurementId: 'G-T3XGEB33CC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestoe = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
