import React, { createContext, useReducer, useContext } from 'react';
import { initialState, AuthReducer } from '../states/AuthReducer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signIn = async () => {
    GoogleSignin.configure({
      webClientId:
        '462671993634-lsbm61qmsbu7s6t64os8i3aj9kv2a23m.apps.googleusercontent.com',
    });
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = async () => {
    await auth().signOut();
  };

  const setUser = user => {
    if (user)
      dispatch({
        type: 'SIGN_IN',
        payload: {
          user: user,
          isAuthenticated: true,
        },
      });
    else
      dispatch({
        type: 'SIGN_OUT',
        payload: {
          user: null,
          isAuthenticated: false,
        },
      });
  };

  const values = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    signIn,
    signOut,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('useAuth must be used within AuthContext');

  return context;
}