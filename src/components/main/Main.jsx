import React, { useEffect, useState } from 'react';

import Filter from './filter/Filter';
import Products from './product/Products';

import { getProducts } from '../../api/products';

export default function Main() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSortby, setSelectedSortby] = useState('default');
  const [searchWord, setSearchWord] = useState('');

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const limit = 24;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getProducts(
      selectedTypes,
      selectedBrands,
      selectedSortby,
      searchWord,
      limit,
      current
    ).then((resp) => {
      setProducts(resp.products);
      setTotalCount(resp.totalCount);
    });

    // setCount
  }, [selectedBrands, selectedTypes, selectedSortby, searchWord]);

  // todo : 스크롤 -> set current+1
  // todo: current 변경 -> 리스트 "추가""

  const includeBrand = (brandToAdd) => {
    setSelectedBrands([...selectedBrands, brandToAdd]);
  };

  const exceptBrand = (brandToExcept) => {
    const updatedBrands = selectedBrands.filter(
      (brand) => brand !== brandToExcept
    );
    setSelectedBrands(updatedBrands);
  };

  const includeType = (typeToAdd) => {
    setSelectedTypes([...selectedTypes, typeToAdd]);
  };

  const exceptType = (typeToExcept) => {
    const updatedTypes = selectedTypes.filter((type) => type !== typeToExcept);
    setSelectedTypes(updatedTypes);
  };

  return (
    <div>
      <Filter
        includeBrand={includeBrand}
        exceptBrand={exceptBrand}
        includeType={includeType}
        exceptType={exceptType}
        setSelectedSortby={setSelectedSortby}
        setSearchWord={setSearchWord}
        totalCount={totalCount}
      />
      <Products products={products} />
    </div>
  );
}
