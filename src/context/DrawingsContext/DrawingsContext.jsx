import { createContext, useReducer, useEffect, useState } from 'react';
import { fetchDrawings } from '../../services/drawings';

export const DrawingsContext = createContext();
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH':
      return [...payload];
    default:
      break;
  }
};

export const DrawingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const value = { state, dispatch };
  return (
    <DrawingsContext.Provider value={value}>
      {children}
    </DrawingsContext.Provider>
  );
};
