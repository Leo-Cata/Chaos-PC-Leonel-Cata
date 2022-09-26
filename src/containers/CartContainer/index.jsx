import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { CartCont } from '../../context/CartContext';
import './styles.scss';

const CartContainer = () => {
  const { cart, clearItems } = useContext(CartCont);

  const nav = useNavigate();
  const handleNav = () => {
    nav(`/`);
  };
  //get items in cart and map them and send them to CartItem
  return (
    <div>
      {cart.length ? (
        ((<button onClick={clearItems}>asdasd</button>),
        cart.map((cartProds) => {
          return <CartItem key={cartProds.id} cartProds={cartProds} />;
        }))
      ) : (
        <div className='cartNav'>
          <h1 className='cart-Empty'>Tu Carrito Esta Vacio</h1>
          <button className='cartNavButton' onClick={handleNav}>
            Volver Al Inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
