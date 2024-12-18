import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDAJWeEbFsfJSlhDEJeFYzjhlJnevrjVrw',
    authDomain: 'githubio-fa4e0.firebaseapp.com',
    databaseURL: 'https://githubio-fa4e0-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'githubio-fa4e0',
    storageBucket: 'githubio-fa4e0.firebasestorage.app',
    messagingSenderId: '836364974060',
    appId: '1:836364974060:web:156d7a5ea5d34a5dd5b2c9',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
