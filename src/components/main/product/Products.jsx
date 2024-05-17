import React from 'react';

import Product from './Product';

export default function Products(props) {
  const products = props.products;

  const productComponents = products.map((product, index) => (
    <Product key={product._id} product={product} />
  ));

  return <div className='container'>{productComponents}</div>;
}
