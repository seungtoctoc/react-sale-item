import React from 'react';

export default function Product(props) {
  const product = props.product;

  // if (!product || !product.price) {
  //   return null;
  // }

  const discountPercentage = product.price.discountRate * 100;
  const link = 'https://' + product.link;

  return (
    <a href={link} target='_blank'>
      <div className='p-2 mb-8'>
        <img src={product.imageUrl} />
        <div className='mt-2'>
          <p className='text-lg font-semibold'>{product.title}</p>
          <p className='text-gray-500'>{product.subtitle}</p>
          <div className='flex gap-2 mt-2 align-items-center'>
            <p className='text-lg text-green-600'>{discountPercentage}%</p>
            <p className='text-sm text-gray-500 line-through'>
              {product.price.fullPrice}
            </p>
          </div>
          <p className='font-semibold text-lg'>
            {product.price.currentPrice.toLocaleString()} 원
          </p>
        </div>
      </div>
    </a>
  );
}
