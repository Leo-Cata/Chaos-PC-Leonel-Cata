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
      cart.map((product) => {
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
  const clearItems = () => {
    setCart([]);
  };
  //remove from cart function
  const removeItem = (itemId) => () => {
    //filters cart which returns all items which id isnt the same as itemId then set to state
    const filteredProds = cart.filter((item) => item.id !== itemId);
    setCart(filteredProds);
  };

  //iterates through the array,  multiplies the qty * price of the product + previous value in acc, initial acc value is 0
  const totalPrice = () => {
    const total = cart.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0,
    );
    return total;
  };

  return (
    <CartCont.Provider
      value={{ cart, addItem, removeItem, clearItems, totalPrice }}>
      {children}
    </CartCont.Provider>
  );
};
//test
export default CartContext;
