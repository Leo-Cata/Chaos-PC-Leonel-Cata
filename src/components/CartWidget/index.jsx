import React from 'react';
import { useContext } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { CartCont } from '../../context/CartContext';
import './style.scss';
const CartWidget = () => {
  //get nav hook
  const nav = useNavigate();

  //nav to cart function
  const handleNav = () => {
    nav(`/cart`);
  };

  //cart context to get the amount of items in the cart
  const { totalItems } = useContext(CartCont);

  return (
    <div className='menu-Icon'>
      <p className='menu-Count'>{totalItems}</p>
      <TiShoppingCart className='menu-Items' onClick={handleNav} />
    </div>
  );
};

export default CartWidget;
