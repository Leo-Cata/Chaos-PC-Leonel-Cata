import React, { useEffect } from 'react'
import { useState } from 'react';
import ItemList from '../../components/ItemList';
import { products } from '../../data/products';
// import ItemCount from '../../components/ItemCount';
import "./styles.scss"

const ItemListContainer = ({placeholder}) => {

    // const addCarrito = (cantidad) =>{
    //     console.log(`Se Agregaron ${cantidad} Al Carrito`)
    // }

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
    (async()=>{
        const getProducts = new Promise((accept, reject)=>{
            setTimeout(() => {
                accept(products);
            }, 2000);
        });

        try{
            const resp = await getProducts;
            setProductos(resp)
        }catch(error){
            console.log(error);
        }

    })()
    }, [productos])
    console.log(productos);
    return (
        <div>
            <ItemList products={productos}/>
        </div>
    )
}

export default ItemListContainer