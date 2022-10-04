import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { CartCont } from '../../context/CartContext';
// import generateOrder from '../../services/generateOrder';
// import { collection, addDoc } from 'firebase/firestore';
// import { doc, updateDoc, getDoc } from 'firebase/firestore';
// import { db } from '../../firebase/config.js';

import './styles.scss';

const CartContainer = () => {
  const { cart, clearItems } = useContext(CartCont);

  const nav = useNavigate();
  const handleNav = () => {
    nav(`/`);
  };

  // const handleBuy = async () => {
  //   const total = totalPrice();
  //   const order = generateOrder('asd', 'asd@asd.com', 1234, cart, total);

  //   // adds order documento to the database, on the "orders" collection
  //   const docRef = await addDoc(collection(db, 'orders'), order);
  //   console.log('Document written with ID: ', docRef.id);

  //   //go throught each item in cart
  //   cart.forEach(async (productInCart) => {
  //     //get a reference of products that matches productInCart.id
  //     const productRef = doc(db, 'products', productInCart.id);
  //     //snapshot that
  //     const productSnap = await getDoc(productRef);
  //     //updateDoc the stock equal to the stock in firebase minuus the quantity of items in the cart for that given id
  //     await updateDoc(productRef, {
  //       stock: productSnap.data().stock - productInCart.quantity,
  //     });
  //   });
  //   clearItems();
  // };

  const handleFormNav = () => {
    nav(`/form`);
  };
  //get items in cart and map them and send them to CartItem
  return (
    <div>
      {cart.length ? (
        <div>
          <button className='cart-Clear' onClick={clearItems}>
            Vaciar El Carrito
          </button>
          <button onClick={handleFormNav} className='cart-Finish'>
            Terminar Compra
          </button>
          {cart.map((cartProds) => {
            return <CartItem key={cartProds.id} cartProds={cartProds} />;
          })}
        </div>
      ) : (
        <div className='cart-Nav'>
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
