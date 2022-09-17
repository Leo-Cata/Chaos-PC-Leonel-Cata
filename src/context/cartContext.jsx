import React, { createContext } from 'react';
import { Children } from 'react';

const cart = createContext([]);

const cartContext = ({ children }) => {
  return <cart.Provider value={[]}>{Children}</cart.Provider>;
};

export default cartContext;
