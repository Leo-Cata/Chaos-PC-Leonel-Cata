import React from 'react'
import {
    useState
} from 'react';
import {
    useEffect
} from 'react';
import {
    useParams
} from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
    //gestiona la obtencion de la data del detalle
    const [productDetailId, setproductDetailId] = useState({});

    const {productId} = useParams();

    console.log(productId);

    useEffect(() => {
        const getProducs = async () => {

            try {
                const resp = await fetch('/data/productos.json')
                const data = await resp.json();
                const idFound = data.find(obj =>{return obj.id == productId});
                setproductDetailId(idFound)
                console.log(idFound, "asdasd")
            } catch (error) {
                console.log(error);
            }
        }
        getProducs();
    }, [productId])

    console.log(productDetailId)
    return ( 
        <ItemDetail products={productDetailId}/>
    )
}

export default ItemDetailContainer