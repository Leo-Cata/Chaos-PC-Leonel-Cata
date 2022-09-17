import React, { useState } from 'react';
import './style.scss';

const ItemCount = ({ product, onAdd, initial }) => {
  const [count, SetCount] = useState(initial);

  const handleAdd = () => {
    if (count < product.stock) {
      SetCount(count + 1);
    } else {
      alert('No Hay Stock');
    }
  };

  const handleSubtract = () => {
    if (count > 0) {
      SetCount(count - 1);
    }
  };

  const addCart = () => {
    onAdd(count);
    SetCount(initial);
  };
  return (
    <>
      <div className='button'>
        <button className='button-less' onClick={handleSubtract}>
          -
        </button>
        <h3 className='button-count'>Cantidad: {count}</h3>
        <button className='button-more' onClick={handleAdd}>
          +
        </button>
      </div>
      <div className='add'>
        <button className='button-add' onClick={addCart}>
          Agregar Al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
