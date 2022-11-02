import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAOw3XZKZnq82NUpVhf-bzu8M6NQXoMfDM",
  authDomain: "login-fa5e7.firebaseapp.com",
  projectId: "login-fa5e7",
  storageBucket: "login-fa5e7.appspot.com",
  messagingSenderId: "418169428056",
  appId: "1:418169428056:web:8d3da58999742ac754522d",
  measurementId: "G-H3Q2BKBFLQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
