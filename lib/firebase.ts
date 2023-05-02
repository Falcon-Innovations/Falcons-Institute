import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyAN6K-EOz5A8kmz33YBnF0r0kIn_x8JihM",
  authDomain: "react-auth-dev-env.firebaseapp.com",
  databaseURL:
    "https://react-auth-dev-env-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-auth-dev-env",
  storageBucket: "react-auth-dev-env.appspot.com",
  messagingSenderId: "627102389536",
  appId: "1:627102389536:web:5a2ebb7e8170f2a7ba7345",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
