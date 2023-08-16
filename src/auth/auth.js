import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDjUKk_VlKBGMeU16FQWbcfwGG_RzaHiQs",
  authDomain: "react-clone-m.firebaseapp.com",
  projectId: "react-clone-m",
  storageBucket: "react-clone-m.appspot.com",
  messagingSenderId: "600747047383",
  appId: "1:600747047383:web:8446b36d3b973facdf7392",
  measurementId: "G-0E61PERXPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
