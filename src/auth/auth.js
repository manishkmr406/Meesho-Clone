import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZYe9zVbyJP6gfT9fGLh7ftah64qnTl-A",
  authDomain: "meesho-auth-1dc6e.firebaseapp.com",
  projectId: "meesho-auth-1dc6e",
  storageBucket: "meesho-auth-1dc6e.appspot.com",
  messagingSenderId: "883648586208",
  appId: "1:883648586208:web:a8feb7d721ba75329bcb85",
  measurementId: "G-VN8RZJQKHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
