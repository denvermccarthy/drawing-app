import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserContext/UserContext';

describe('redirects to auth page', () => {
  test('should show auth', () => {
    render(
      <UserProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserProvider>
    );
    screen.getByRole('button', { name: 'Sign Up' });
  });
});
