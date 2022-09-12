import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    //gestiona la obtencion de la data del detalle
    const [productAPI, setProductAPI] = useState({});
    useEffect(()=>{
        const getProducs= async()=>{

            try{
            const resp = await fetch("https://fakestoreapi.com/products/10")
            const data = await resp.json()
            setProductAPI(data)

            } catch(error){
                console.log(error);
            }
        }
        getProducs();
    },[])
    
    console.log(productAPI)
    return (
        <ItemDetail productDetail={productAPI}/>
    )
}

export default ItemDetailContainer