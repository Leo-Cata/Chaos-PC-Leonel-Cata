import React from 'react'
import ItemCount from '../../components/ItemCount';
import "./styles.scss"

const ItemListContainer = ({placeholder}) => {

    const addCarrito = (cantidad) =>{
        console.log(`Se Agregaron ${cantidad} Al Carrito`)
    }

    return (
        <div>
        <h2 className='placeholder'>{placeholder}</h2>
        <ItemCount initial={1} stock={5} onAdd={addCarrito}/>
        </div>
    )
}

export default ItemListContainer