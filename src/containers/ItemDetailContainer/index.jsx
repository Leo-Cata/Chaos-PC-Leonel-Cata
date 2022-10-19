import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

import ItemDetail from '../../components/ItemDetail';
import Loading from '../../components/Loading';

const ItemDetailContainer = () => {
  //detailid state
  const [productDetailId, setproductDetailId] = useState({});

  //params to get the product id
  const { productId } = useParams();
  const nav = useNavigate();

  //effect to fetch json and return id of product and save it in the state. effects updates when productId changes
  useEffect(() => {
    const getProducs = async () => {
      try {
        //referencia a la db(database) porque los datos ya estan cacheados(?)
        const docRef = doc(db, 'products', productId);
        //pide los datos
        const docSnap = await getDoc(docRef);

        //si hay datos
        if (docSnap.exists()) {
          //setear como id el id del docSnap y un spread a la data del docSnap asi se guarda en 1 solo objeto
          setproductDetailId({ id: docSnap.id, ...docSnap.data() });
        } else {
          nav('*');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducs();
  }, [productId, nav]);

  //if there's an ID in productDetailId = render itemDetail else loading
  return (
    <div>
      {productDetailId.id ? (
        <ItemDetail products={productDetailId} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ItemDetailContainer;
