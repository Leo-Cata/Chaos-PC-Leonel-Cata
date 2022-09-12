import React, {useState} from 'react'
import "./style.scss"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, SetCount] = useState(initial)

    const handleAdd = () =>{
        if(count < stock){
        SetCount(count+1)
        }else{
            alert("No Hay Stock")
        }
    }

    const handleSubtract = () =>{
        if(count > initial){
            SetCount(count-1)
        }
    }
    return (
    <div className='button'>
        <button className='buttonColor' onClick={handleSubtract}>-</button>
        <h3 className='buttonColor'>Cantidad: {count}</h3>
        <button className='buttonColor' onClick={handleAdd}>+</button>
        <button className='buttonBtn' onClick={()=>onAdd(count)}>Agregar Al Carrito</button>
    </div>
    )
}

export default ItemCount