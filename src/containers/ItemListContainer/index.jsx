import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
// import ItemCount from '../../components/ItemCount';
import './styles.scss';

const ItemListContainer = ({ placeholder }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (categoryId) {
          const resp = await fetch('/data/productos.json');
          const productosToSet = await resp.json();
          const filtered = productosToSet.filter((productosToSet1) => {
            return productosToSet1.category === categoryId;
          });
          setProductos(filtered);
        } else if (categoryId === undefined) {
          const resp = await fetch('/data/productos.json');
          const productosToSet = await resp.json();
          setProductos(productosToSet);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);
  console.log(categoryId, 'asd', productos);
  return (
    <div>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
