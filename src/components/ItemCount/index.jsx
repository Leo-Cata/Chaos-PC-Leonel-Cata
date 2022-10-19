import React, { useState } from 'react';

import Swal from 'sweetalert2';

import './style.scss';

//gets product, on add and initial from props
const ItemCount = ({ product, onAdd, initial }) => {
  //state to save qty of items
  const [count, SetCount] = useState(initial);

  const sweetAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Lo Sentimos',
      text: 'No Hay Stock Suficiente',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4B0082',
      customClass: {
        icon: 'swal-Icon',
        title: 'swal-Title',
        htmlContainer: 'swal-Text',
      },
    });
  };

  //if count is not higher than stock, add to count state, else alert
  const handleAdd = () => {
    if (count < product.stock) {
      SetCount(count + 1);
    } else {
      sweetAlert();
    }
  };

  //if count is not less than 0, dont subtract
  const handleSubtract = () => {
    if (count > 0) {
      SetCount(count - 1);
    }
  };

  //add count to the onAdd function for qty, setcount back to the initial value
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
