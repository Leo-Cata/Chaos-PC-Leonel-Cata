import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  //detailid state
  const [productDetailId, setproductDetailId] = useState({});

  //params to get the product id
  const { productId } = useParams();

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
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducs();
  }, [productId]);

  return <ItemDetail products={productDetailId} />;
};

export default ItemDetailContainer;
