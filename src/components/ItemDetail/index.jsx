import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartCont } from '../../context/CartContext';
import ItemCount from '../ItemCount';

import './styles.scss';

//gets products from props
const ItemDetail = ({ products }) => {
  //get addItem context
  const { addItem } = useContext(CartCont);

  //qty state
  const [qty, setQty] = useState(0);

  //passed as onAdd to itemCount, saves the qty of item for cart
  const addCart1 = (quantity) => {
    setQty(quantity);
  };
  //when pressing finalizar compra, adds the qty to the state in cartContext and navs to cart
  const handleToCart = () => {
    const productForCart = { ...products, quantity: qty };
    addItem(productForCart);
    navigate('/cart');
  };

  //navigate hook to go to /cart
  const navigate = useNavigate();
  return (
    <div className='detail'>
      <img className='detail-Img' src={products.img} alt='producto' />
      <div className='detail-Texts'>
        <h1 className='detail-Title'>{products.name}</h1>
        <p className='detail-Desc'>{products.description}</p>
        <p className='detail-Price'>${products.price}</p>
        <p className='detail-Stock'>Unidades Disponibles: {products.stock}</p>
        {!qty ? (
          <ItemCount product={products} onAdd={addCart1} initial={1} />
        ) : (
          <button className='detail-Btn' onClick={handleToCart}>
            Finalizar Compra
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
