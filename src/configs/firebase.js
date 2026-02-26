import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBZlmWdAEbGrxkg57Xvrg05e73w-EkDBIg',
  authDomain: 'ai-science-lab.firebaseapp.com',
  projectId: 'ai-science-lab',
  storageBucket: 'ai-science-lab.firebasestorage.app',
  messagingSenderId: '553220877680',
  appId: '1:553220877680:web:c8b8b744617e56bdf1b3b5',
  measurementId: 'G-KFFP7LY6YV',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
