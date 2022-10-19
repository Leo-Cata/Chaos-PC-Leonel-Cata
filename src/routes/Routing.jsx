import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import CartContainer from '../containers/CartContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer';
import FormDataContainer from '../containers/FormDataContainer';

import CartContext from '../context/CartContext';

const Routing = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar brand={'Chaos PC'} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/form' element={<FormDataContainer />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
};

export default Routing;
