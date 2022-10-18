import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

//get products as props
const Item = ({ products }) => {
  //navigate hook to navigate to that item id ItemDetail
  const nav = useNavigate();

  //on click nav to itemDetail if that Id
  const handleNav = () => {
    nav(`/detail/${products.id}`);
  };
  return (
    <div className='card' onClick={handleNav}>
      <img className='card-Img' src={products.img} alt='product' />
      <h1 className='card-Title'>{products.name}</h1>
      <p className='card-Price'>${products.price}</p>
    </div>
  );
};

export default Item;
