import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyB4_rhB9wbI5Fgxxj--vvijtyxl2B5Qqqk',
  authDomain: 'nsect-netflix.firebaseapp.com',
  projectId: 'nsect-netflix',
  storageBucket: 'nsect-netflix.appspot.com',
  messagingSenderId: '769148585415',
  appId: '1:769148585415:web:f0a7155b8cbecdc4c8c5e2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth, firebaseApp };
export default db;
