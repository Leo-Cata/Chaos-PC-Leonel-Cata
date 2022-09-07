import React from 'react'
import Item from '../Item';
import "./styles.scss"
const ItemList = ({products}) => {
    return (
        <div>
            {products.map(products =>{
                return <Item key={products.id} products={products}/>
            })}
        </div>
    )
}

export default ItemList