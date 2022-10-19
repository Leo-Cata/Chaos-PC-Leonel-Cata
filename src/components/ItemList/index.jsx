import React from 'react';

import Item from '../Item';

import './styles.scss';

//maps the products from fetch to items container for it to render
const ItemList = ({ products }) => {
  return (
    <div className='items'>
      {products.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};

export default ItemList;
