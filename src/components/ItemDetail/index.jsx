import React from 'react'
import "./styles.scss"

const ItemDetail = ({productDetail}) => {
    return (
        <div className='detail'>
            <img className='detail-img' src={productDetail.image} alt="producto" />
            <div className="detail-texts">
                <h1 className='detail-title'>{productDetail.title}</h1>
                <p className='detail-desc'>{productDetail.description}</p>
                <p className="detail-price">${productDetail.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail