// src/utils/authUtils.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust if your path is different

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
