import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  GithubAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthContext = React.createContext();

export const useAuth = function () {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  // lookup user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user === null || user.emailVerified) {
        setCurrentUser(user);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // googleLogin
  const googleLogin = async function () {
    return await signInWithPopup(auth, googleProvider);
  };

  // githubLogin
  const githubLogin = async function () {
    return await signInWithPopup(auth, githubProvider);
  };

  // facebookLogin
  const facebookLogin = async function () {
    return await signInWithPopup(auth, facebookProvider);
  };

  // signup
  const signup = async function (email, password, username) {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    // const user = auth.currentUser;
    const user = result.user;
    if (user.emailVerified) {
      setCurrentUser({ ...user });
    }
  };

  // verifyEmail

  const verifyEmail = async function () {
    return await sendEmailVerification(auth.currentUser);
  };

  //login
  const login = async function (email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // reset password

  const forgetPassword = async function (email) {
    return await sendPasswordResetEmail(auth, email);
  };

  //logout
  const logout = async function () {
    return await signOut(auth);
  };

  const value = {
    currentUser,
    loading,
    signup,
    verifyEmail,
    login,
    googleLogin,
    githubLogin,
    facebookLogin,
    forgetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
