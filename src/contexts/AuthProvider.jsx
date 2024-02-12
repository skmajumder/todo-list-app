import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import app from '../firebase/firebase.init';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState('example@gmail.com');
  const [userPassword, setUserPassword] = useState('react--todo');
  const [loading, setLoading] = useState(true);

  function handleUserEmail(userEmail) {
    setUserEmail(userEmail);
  }

  function handleUserPassword(userPassword) {
    setUserPassword(userPassword);
  }

  const auth = getAuth(app);

  // * Google provider
  const googleProvider = new GoogleAuthProvider();

  /**
   * *  User Sign Up (Register)
   * @param {*} email
   * @param {*} password
   * @returns
   */
  function signUp(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function handleUserRegister(e, navigate) {
    e.preventDefault();

    signUp(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            title: 'Congratulations',
            text: 'User Create Successfully',
            icon: 'success',
          });

          // * Redirect to the "/todo" route
          navigate('/todo');
        } else {
          throw new Error("Couldn't register user");
        }
      })
      .catch((error) => {
        const registerErrorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: registerErrorMessage,
        });
      });
  }

  /**
   * * User Sign In (Login)
   * @param {*} email
   * @param {*} password
   * @returns
   */
  function signIn(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleUserLogin(e, navigate) {
    e.preventDefault();

    signIn(userEmail, userPassword)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        if (loggedUser) {
          Swal.fire({
            title: 'Congratulations',
            text: 'User Login Successfully',
            icon: 'success',
          });

          // * Redirect to the "/todo" route
          navigate('/todo');
        } else {
          throw new Error("Couldn't Login user");
        }
      })
      .catch((error) => {
        const loginErrorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: loginErrorMessage,
        });
      });
  }

  /**
   * * User Sign In with GOOGLE
   * @returns
   */
  function googleSignIn() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  function handleGoogleSignIn(navigate) {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            title: 'Congratulations',
            text: 'User Create Successfully',
            icon: 'success',
          });

          // * Redirect to the "/todo" route
          navigate('/todo');
        } else {
          throw new Error("Couldn't register user");
        }
        navigate('/');
      })
      .catch((error) => {
        const registerErrorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: registerErrorMessage,
        });
      });
  }

  //  * User Logout
  function logout() {
    setLoading(true);
    return signOut(auth);
  }

  // * Observe the user current status. Check user is login or logged out
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [auth]);

  const authInfo = {
    user,
    userEmail,
    userPassword,
    loading,
    handleUserRegister,
    handleUserLogin,
    handleGoogleSignIn,
    logout,
    handleUserEmail,
    handleUserPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
