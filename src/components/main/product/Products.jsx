import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';

import Product from './Product';

export default function Products(props) {
  const products = props.products;
  const updatePage = props.updatePage;

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const [productComponents, setProductComponents] = useState([]);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      updatePage();
    }
  }, [inView]);

  useEffect(() => {
    const updatedProductComponents = products.map((product, index) => (
      <div
        key={`${product._id}-${index}`}
        style={{
          width: isSmallScreen ? '50%' : '33.333%',
        }}
      >
        <Product product={product} />
      </div>
    ));
    setProductComponents(updatedProductComponents);
  }, [products, isSmallScreen]);

  return (
    <div key={`${products.length}`} className='container d-flex flex-wrap'>
      {productComponents}
      <div ref={ref}></div>
    </div>
  );
}
