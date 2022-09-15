import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.scss"

const Item = ({products}) => {
  const nav = useNavigate();

  const handleNav = () =>{
    nav(`/detail/${products.id}`)
  }
  return (
    <div className="card" onClick={handleNav}>
      <img className='cardImg' src={products.img} alt="asd" />
      <h1 className='cardTitle'>{products.name}</h1>
      <p className="cardDesc">{products.miniDesciption}</p>
      <p className="cardPrice">${products.price}</p>
      <p className="cardStock">Stock Disponible: {products.stock}</p>
    </div>
  )
}

export default Item