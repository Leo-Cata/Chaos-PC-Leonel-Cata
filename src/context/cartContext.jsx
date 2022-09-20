import React, { createContext, useState } from 'react';

export const CartCont = createContext([]);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const repeatedProduct = isInCart(item.id);
    if (repeatedProduct) {
      const newCartQty = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        }
        return product;
      });
      console.log('repeated cart: ', newCartQty);
    } else {
      const newCart = [...cart, item];
      setCart(newCart);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clear = () => {
    setCart([1]);
  };

  const removeItem = (itemId) => {
    const itemIsFound = isInCart(itemId);
    console.log(itemIsFound);
    if (itemIsFound) {
      const itemToRemove = cart.find((prod) => prod.id === itemId);
      const itemToRemoveIndex = cart.indexOf(itemToRemove);
      cart.splice(itemToRemoveIndex, 1);
    }
  };
  return (
    <CartCont.Provider value={{ cart, addItem }}>{children}</CartCont.Provider>
  );
};

export default CartContext;
