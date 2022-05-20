import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../hooks/form';
import useAuth from '../../hooks/user';

export default function AuthForm({ isSigningIn }) {
  const { signIn, signUp } = useAuth();
  const { formState, handleChange } = useForm({ email: '', password: '' });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    console.log('email', email);
    console.log('password', password);
    isSigningIn ? await signIn(email, password) : await signUp(email, password);
    // history.push('/');
  };
  const signingUpFragment = (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name
          <input type="text" id="first-name" placeholder="First Name" />
        </label>
        <label htmlFor="last-name">
          Last Name
          <input type="text" id="last-name" placeholder="Last Name" />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            value={formState.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            value={formState.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
  const signingInFragment = (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
          <input
            onChange={handleChange}
            value={formState.email}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={handleChange}
            value={formState.password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );

  return isSigningIn ? signingInFragment : signingUpFragment;
}
