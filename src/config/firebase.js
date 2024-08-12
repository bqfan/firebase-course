// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi8LLkL4c4qU-YUXZnnXiR4uvuhl5uiHw",
  authDomain: "fir-course-448fb.firebaseapp.com",
  projectId: "fir-course-448fb",
  storageBucket: "fir-course-448fb.appspot.com",
  messagingSenderId: "19156886039",
  appId: "1:19156886039:web:11afc673faaea8478e3252",
  measurementId: "G-D5T0QWD8J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
