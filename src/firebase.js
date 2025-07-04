
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ⚠️ Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_ID',
  appId: 'SEU_APP_ID'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
