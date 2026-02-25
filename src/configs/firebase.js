import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'dummy-api-key-to-bypass-crash',
  authDomain: 'dummy-domain.firebaseapp.com',
  databaseURL: 'https://dummy-database.firebaseio.com',
  projectId: 'dummy-project-id',
  storageBucket: 'dummy-bucket.appspot.com',
  messagingSenderId: '123456789012',
  appId: '1:123456789012:web:abcdef1234567890',
  measurementId: 'G-DUMMYID123',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
