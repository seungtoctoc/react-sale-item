import React, { useEffect, useState } from 'react';

import OptionBundle from './OptionBundle';

export default function Filter() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSortby, setSelectedSortby] = useState('');

  const brands = ['NIKE', 'ADIDAS', 'NEWBALANCE'];
  const types = ['FOOTWEAR', 'APPAREL'];

  useEffect(() => {
    // api
  }, [selectedBrands, selectedTypes]);
  return (
    <div className='mt-3'>
      <OptionBundle
        title='브랜드'
        options={brands}
        selectedOptions={selectedBrands}
        setSelectedOptions={setSelectedBrands}
      />
      <OptionBundle
        title='카테고리'
        options={types}
        selectedOptions={selectedTypes}
        setSelectedOptions={setSelectedTypes}
      />
    </div>
  );
}
