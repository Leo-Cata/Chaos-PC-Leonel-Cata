import React, { useContext } from 'react';

import { TbError404 } from 'react-icons/tb';

import { CartCont } from '../../context/CartContext';

import './styles.scss';

const NotFound = () => {
  const { handleNavMain } = useContext(CartCont);

  return (
    <div className='notFound'>
      <TbError404 className='notFound-Icon' />
      <h2 className='notFound-Text'>
        La Direccion Que Ingresaste No Existe :(
      </h2>
      <button className='notFound-Button' onClick={handleNavMain}>
        Volver Al Inicio
      </button>
    </div>
  );
};

export default NotFound;
