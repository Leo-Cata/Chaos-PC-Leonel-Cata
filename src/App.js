import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import CartContext from './context/CartContext';
import FormDataContainer from './containers/FormDataContainer';

function App() {
  const brandName = 'Chaos PC';
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar brand={brandName} />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/form' element={<FormDataContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
