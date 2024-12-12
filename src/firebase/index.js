import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDAJWeEbFsfJSlhDEJeFYzjhlJnevrjVrw',
    authDomain: 'githubio-fa4e0.firebaseapp.com',
    projectId: 'githubio-fa4e0',
    storageBucket: 'githubio-fa4e0.firebasestorage.app',
    messagingSenderId: '836364974060',
    appId: '1:836364974060:web:156d7a5ea5d34a5dd5b2c9',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
