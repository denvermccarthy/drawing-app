import { useState } from 'react';
import {
  signingInFragment,
  signingUpFragment,
} from '../../fragments/fragments';
import styles from './auth.css';

export default function Auth() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const textContent = isSigningIn ? 'Log In' : 'Sign Up';

  return (
    <div>
      <h1>{textContent}</h1>
      <form>
        {isSigningIn ? signingInFragment : signingUpFragment}{' '}
        <button type="submit">{textContent}</button>
      </form>
      {isSigningIn ? (
        <p>
          New here? Please{' '}
          <span className={styles.change} onClick={() => setIsSigningIn(false)}>
            create an account
          </span>
        </p>
      ) : (
        <p>
          Have an account? Please{' '}
          <span className={styles.change} onClick={() => setIsSigningIn(true)}>
            log in here
          </span>
        </p>
      )}
    </div>
  );
}
