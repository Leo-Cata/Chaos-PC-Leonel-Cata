import React from 'react';
import { useContext } from 'react';
import { CartCont } from '../../context/CartContext';
import './styles.scss';

function CartItem({ cartProds }) {
  const { removeItem } = useContext(CartCont);
  const pricesXqty = cartProds.price * cartProds.quantity;
  return (
    <div className='cartItem'>
      <img src={cartProds.img} alt='' className='cartImg' />
      <h2 className='cartName'>{cartProds.name}</h2>
      <h3 className='cartQuantity'>{cartProds.quantity}</h3>
      <h2 className='cartPrice'>{pricesXqty}</h2>
      <div className='cartRemoveSpace'>
        <button className='cartRemove' onClick={removeItem(cartProds.id)}>
          Remover Articulo
        </button>
      </div>
    </div>
  );
}

export default CartItem;
