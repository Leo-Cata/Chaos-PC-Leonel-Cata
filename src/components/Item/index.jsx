import React from 'react'
import "./styles.scss"

const Item = ({products}) => {
  return (
    <div className="card">
      {/* <img className='cardImg' src={products.imgL} alt="" /> */}
      <img className='cardImg' src="https://en.wikichip.org/w/images/0/01/amd_ryzen_9_logo.png" alt="asd" />
      <h1 className='cardTitle'>{products.name}</h1>
      <p className="cardDesc">{products.description}</p>
      <p className="cardPrice">${products.price}</p>
      <p className="cardStock">Stock Disponible: {products.stock}</p>
    </div>
  )
}

export default Item