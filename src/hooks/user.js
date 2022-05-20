import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext/UserContext';
import { signInUser, signUpUser } from '../services/users';

export default function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error(`useAuth must be used in a userProvider`);

  const { user, setUser } = context;

  const signIn = async (email, password) => {
    const userData = await signInUser(email, password);
    setUser(userData);
  };
  const signUp = async (email, password) => {
    const userData = await signUpUser(email, password);
    setUser(userData);
  };
  const signOut = async () => {
    await signOut();
    setUser({ email: null, id: null });
  };
  return { signIn, signUp, signOut, user };
}
