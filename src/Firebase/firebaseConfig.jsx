
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhzt_sjZhqqrpCMJYpB35R_TjwqEjCts",
  authDomain: "collegemania-db1f6.firebaseapp.com",
  projectId: "collegemania-db1f6",
  storageBucket: "collegemania-db1f6.appspot.com",
  messagingSenderId: "627242542865",
  appId: "1:627242542865:web:2bf5011ad79f8014980eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const auth = getAuth(app);

