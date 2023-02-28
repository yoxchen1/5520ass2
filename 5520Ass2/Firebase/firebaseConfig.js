import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCqF_SfjeH7icE272DP9yKU6hDS32YFLv0",
//   authDomain: "myproject-6b11c.firebaseapp.com",
//   projectId: "myproject-6b11c",
//   storageBucket: "myproject-6b11c.appspot.com",
//   messagingSenderId: "10412518198",
//   appId: "1:10412518198:web:ad0e135f92f1292b9ce197"
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };