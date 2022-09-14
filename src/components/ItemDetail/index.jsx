import React from 'react'
import "./styles.scss"

const ItemDetail = ({products}) => {
    return (
        <div className='detail'>
            <img className='detail-img' src={products.img} alt="producto" />
            <div className="detail-texts">
                <h1 className='detail-title'>{products.name}</h1>
                <p className='detail-desc'>{products.description}</p>
                <p className="detail-price">${products.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail