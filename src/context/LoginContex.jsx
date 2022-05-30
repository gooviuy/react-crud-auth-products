import { createContext, useContext, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const loginContext = createContext();

export const useLogin = () => {
  const context = useContext(loginContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export const LoginProvider = ({ children }) => {
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const contextValue = useMemo(() => {
    return { login, logout };
  }, []);

  return (
    <loginContext.Provider value={contextValue}>
      {children}{" "}
    </loginContext.Provider>
  );
};
