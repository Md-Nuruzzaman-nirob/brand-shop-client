import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

// google
const googleProvider = new GoogleAuthProvider();
// github
const githubProvider = new GithubAuthProvider();

const ContextProvider = ({ children }) => {
  // useState
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        axios
          .post("http://localhost:5001/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("access token", data.data);
          });
      } else {
        axios
          .post("http://localhost:5001/logout", loggedUser, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("remove cookie", data.data);
          });
      }
    });
    () => {
      return unsubscribe;
    };
  }, [user?.email]);

  // logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // authentication
  const authentication = {
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
    user,
    loader,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
