import React, {useState} from 'react'
import "./style.scss"

const ItemCount = ({product}) => {
    
    const [count, SetCount] = useState(0)

    const handleAdd = () =>{
        if(count < product.stock){
        SetCount(count+1)
        }else{
            alert("No Hay Stock")
        }
    }

    const handleSubtract = () =>{
        if(count > 0){
            SetCount(count-1)
        }
    }
    return (
        <>
            <div className='button'>
            <button className='button-less' onClick={handleSubtract}>-</button>
            <h3 className='button-count'>Cantidad: {count}</h3>
            <button className='button-more' onClick={handleAdd}>+</button>
            </div>
            <div className="add">
        <button className='button-add'>Agregar Al Carrito</button>
        </div>
    </>
    )
}

export default ItemCount