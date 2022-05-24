import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DrawingsProvider } from './context/DrawingsContext/DrawingsContext';
import UserProvider from './context/UserContext/UserContext';

render(
  <React.StrictMode>
    <BrowserRouter>
      <DrawingsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </DrawingsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
