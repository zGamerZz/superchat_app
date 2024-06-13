import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyBSDugIRHH1bWMpEPj8Vvhmr8cuYHTW-ws",
  authDomain: "reactchat-63798.firebaseapp.com",
  projectId: "reactchat-63798",
  storageBucket: "reactchat-63798.appspot.com",
  messagingSenderId: "438265477867",
  appId: "1:438265477867:web:bd627255bea6cf178b9cae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()