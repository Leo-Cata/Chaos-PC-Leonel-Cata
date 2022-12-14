import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

import { CartCont } from '../../context/CartContext';
import generateOrder from '../../services/generateOrder';
import Loading from '../../components/Loading';

import './styles.scss';

import Swal from 'sweetalert2';

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

  const [processingBuy, setProcessingBuy] = useState(false);

  const saveData = (element) => {
    //spread orderData, get the name of elemented targeted(for name="name" will set name, for name="email" will set email) and get the value of those inputs, then save it
    setOrderData({ ...orderData, [element.target.name]: element.target.value });
  };

  const handleBuy = async (element) => {
    element.preventDefault();
    if (cart.length && orderData.name && orderData.email && orderData.phone) {
      setProcessingBuy(true);
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

      //IIFE function, show alert after processing purchase
      (() => {
        Swal.fire({
          icon: 'success',
          title: 'Muchas Gracias Por Su Compra',
          text: 'ID De Su Compra: ' + docRef.id,
          showConfirmButton: true,
          confirmButtonText: 'aceptar',
          confirmButtonColor: '#4B0082',
          customClass: {
            container: 'swal-Container',
            title: 'swal-Title',
            htmlContainer: 'swal-Text',
          },
        });
      })();
      setProcessingBuy(false);

      nav('/');
    } else if (!cart.length) {
      (() => {
        Swal.fire({
          icon: 'error',
          title: 'Tu Carrito Esta Vacio',
          customClass: {
            container: 'swal-Container',
            title: 'swal-Title',
          },
        });
      })();
    } else {
      (() => {
        Swal.fire({
          icon: 'error',
          title: 'Llena Los Datos Antes De Continuar',
          customClass: {
            container: 'swal-Container',
            title: 'swal-Title',
          },
        });
      })();
    }
  };

  return processingBuy ? (
    <Loading />
  ) : (
    <form onSubmit={handleBuy} className='form'>
      <label>
        <h2 className='form-Title'>
          Ingrese Sus Datos Para Finalizar La Compra
        </h2>
        <h2 className='form-Total'>Total: ${total}</h2>
      </label>
      <input
        type='text'
        placeholder='Nombre'
        name='name'
        onChange={saveData}
        pattern='[A-Za-z]{}'
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
        type='email'
        placeholder='Repetir La Direccion E-mail'
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
