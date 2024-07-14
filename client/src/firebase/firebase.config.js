// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGCzcasMIrCD1erSAAZnuPfU-yEkeqRk",
  authDomain: "mern-book-store-5d08f.firebaseapp.com",
  projectId: "mern-book-store-5d08f",
  storageBucket: "mern-book-store-5d08f.appspot.com",
  messagingSenderId: "345091149099",
  appId: "1:345091149099:web:bed272514c7a244ca2c96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;