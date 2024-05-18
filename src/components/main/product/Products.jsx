import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Product from './Product';

export default function Products(props) {
  const products = props.products;
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='container d-flex flex-wrap'>
      {products.map((product, index) => (
        <div
          key={product._id}
          style={{
            width: isSmallScreen ? '50%' : '33.333%',
          }}
        >
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
