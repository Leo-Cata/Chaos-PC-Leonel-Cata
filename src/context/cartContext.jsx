import React, { createContext, useState } from 'react';

//create context to export to app.js
export const CartCont = createContext([]);

//cart context function
const CartContext = ({ children }) => {
  //cart state to save stuff
  const [cart, setCart] = useState([]);

  //add item to the cart, if reapeated add x to qty
  const addItem = (item) => {
    //check if item passed is already in cart
    const repeatedProduct = isInCart(item.id);
    if (repeatedProduct) {
      //if repeated, map for the product, check for id to be the same and add qty, return that, else add to cart state
      const newCartQty = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        }
        return product;
      });
    } else {
      const newCart = [...cart, item];
      setCart(newCart);
    }
  };

  //check if its in cart function
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  //clear cart function
  const clear = () => {
    setCart([]);
  };

  //remove from cart function
  const removeItem = (itemId) => {
    const itemIsFound = isInCart(itemId);

    //if item is found, find the id thats equal to the passed id, index and remove
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
