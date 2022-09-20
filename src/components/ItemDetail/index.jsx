import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCont } from '../../context/cartContext';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({ products }) => {
  const { addItem } = useContext(CartCont);

  const [qty, setQty] = useState(0);

  const addCart1 = (quantity) => {
    setQty(quantity);
  };

  const handleToCart = () => {
    const productForCart = { ...products, quantity: qty };
    addItem(productForCart);
    navigate('/cart');
  };

  const navigate = useNavigate();
  console.log('first', qty);
  return (
    <div className='detail'>
      <img className='detail-img' src={products.img} alt='producto' />
      <div className='detail-texts'>
        <h1 className='detail-title'>{products.name}</h1>
        <p className='detail-desc'>{products.description}</p>
        <p className='detail-price'>${products.price}</p>
        {!qty ? (
          <ItemCount product={products} onAdd={addCart1} initial={1} />
        ) : (
          <button className='detail-btn' onClick={handleToCart}>
            Finalizar Compra
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
