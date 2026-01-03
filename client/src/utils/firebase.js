
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-6256f.firebaseapp.com",
  projectId: "interviewai-6256f",
  storageBucket: "interviewai-6256f.firebasestorage.app",
  messagingSenderId: "1013815300323",
  appId: "1:1013815300323:web:564dbed29ff8c01f3475d6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }