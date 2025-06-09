// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ0IXotfN3n124Gk9qyh2xeLd4CvJc8B4",
  authDomain: "south-bay-volunteer-circle.firebaseapp.com",
  projectId: "south-bay-volunteer-circle",
  storageBucket: "south-bay-volunteer-circle.firebasestorage.app",
  messagingSenderId: "851445780256",
  appId: "1:851445780256:web:bd258d0055140264d55145",
  measurementId: "G-ZBHVBRG4S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };