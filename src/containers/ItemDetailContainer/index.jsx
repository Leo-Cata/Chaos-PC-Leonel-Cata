import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {
  //detailid state
  const [productDetailId, setproductDetailId] = useState({});

  //params to get the product id
  const { productId } = useParams();

  //effect to fetch json and return id of product and save it in the state. effects updates when productId changes
  useEffect(() => {
    const getProducs = async () => {
      try {
        const resp = await fetch('/data/productos.json');
        const data = await resp.json();
        const idFound = data.find((obj) => {
          return obj.id === parseInt(productId);
        });
        setproductDetailId(idFound);
      } catch (error) {
        console.log(error);
      }
    };
    getProducs();
  }, [productId]);

  return <ItemDetail products={productDetailId} />;
};

export default ItemDetailContainer;
