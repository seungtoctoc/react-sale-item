import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import SortBy from './SortBy';
import OptionBundle from './OptionBundle';

export default function Filter() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSortby, setSelectedSortby] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const brands = ['NIKE', 'ADIDAS', 'NEWBALANCE'];
  const types = ['FOOTWEAR', 'APPAREL'];

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // get products
  }, [selectedBrands, selectedTypes, selectedSortby]);

  return (
    <div>
      <SearchBar setSearchWord={setSearchWord} />
      <SortBy totalCount={totalCount} />
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
