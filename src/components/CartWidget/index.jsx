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

  //TODO: WIDGET WITH AMOUNT OF TOTAL ITEMS
  //cart context to get the amount of items in the cart
  const { cart } = useContext(CartCont);
  //if cart has any length render count and cart, else empty
  return (
    <div className='menu-Icon'>
      {cart.length ? (
        <>
          <p className='menu-Count'>{cart.length}</p>
          <TiShoppingCart className='menu-Items' onClick={handleNav} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default CartWidget;
