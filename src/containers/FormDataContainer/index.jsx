import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartCont } from '../../context/CartContext';
import { db } from '../../firebase/config';
import generateOrder from '../../services/generateOrder';
import './styles.scss';

const FormData = () => {
  const nav = useNavigate();
  const { cart, totalPrice, clearItems } = useContext(CartCont);
  const total = totalPrice();
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    items: cart,
    total: total,
  });
  const saveData = (element) => {
    //spread orderData, get the name of elemented targeted(for name="name" will set name, for name="email" will set email) and get the value of those inputs, then save it
    setOrderData({ ...orderData, [element.target.name]: element.target.value });
  };
  const handleBuy = async (element) => {
    element.preventDefault();
    const order = generateOrder(
      orderData.name,
      orderData.email,
      orderData.phone,
      cart,
      total,
    );

    // adds order documento to the database, on the "orders" collection
    const docRef = await addDoc(collection(db, 'orders'), order);

    //go throught each item in cart
    cart.forEach(async (productInCart) => {
      //get a reference of products that matches productInCart.id
      const productRef = doc(db, 'products', productInCart.id);

      //snapshot that
      const productSnap = await getDoc(productRef);
      //updateDoc the stock equal to the stock in firebase minuus the quantity of items in the cart for that given id
      await updateDoc(productRef, {
        stock: productSnap.data().stock - productInCart.quantity,
      });
    });
    //sets all the input info to the carts
    setOrderData({});
    //cleans the cart
    clearItems();
    console.log(orderData);
    alert('Compra Realizada, ID: ' + docRef.id);
    nav('/');
  };

  return (
    <form onSubmit={handleBuy} className='form'>
      <input
        type='text'
        placeholder='Nombre'
        name='name'
        onChange={saveData}
        className='form-Input'
      />
      <input
        type='email'
        placeholder='Direccion E-mail'
        name='email'
        onChange={saveData}
        className='form-Input'
      />
      <input
        type='number'
        placeholder='Telefono'
        name='phone'
        onChange={saveData}
        className='form-Input'
      />
      <button className='form-Button'>Finalizar compra</button>
    </form>
  );
};

export default FormData;
