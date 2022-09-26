import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
// import ItemCount from '../../components/ItemCount';
import './styles.scss';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ placeholder }) => {
  //gets categoryId as param for navigation
  const { categoryId } = useParams();
  //products state
  const [productos, setProductos] = useState([]);

  //fetches items, if there's smt in categoryId, fectches items from that category else shows everything
  useEffect(() => {
    (async () => {
      try {
        //se genera la query
        const q = categoryId
          ? query(
              collection(db, 'products'),
              where('category', '==', categoryId),
            )
          : query(collection(db, 'products'));

        //realiza llamado a firebase
        const querySnapshot = await getDocs(q);
        //se obtiene el "snapshot" con los datos crudos
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          productosFirebase.push({ id: doc.id, ...doc.data() });
        });
        console.log(productosFirebase);
        setProductos(productosFirebase);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);
  //updates when categoryId changes

  return (
    <div>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
