import React from 'react';
import { useContext } from 'react';
import CartItem from '../../components/CartItem';
import { CartCont } from '../../context/CartContext';

const CartContainer = () => {
  const { cart, clearItems } = useContext(CartCont);
  //get items in cart and map them and send them to CartItem
  return (
    <div>
      <button onClick={clearItems}>asdasd</button>
      {cart.map((cartProds) => {
        return <CartItem key={cartProds.id} cartProds={cartProds} />;
      })}
    </div>
  );
};

export default CartContainer;
