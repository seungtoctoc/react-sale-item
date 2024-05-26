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
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log('update products');
    setPage(0);

    getProducts(
      selectedTypes,
      selectedBrands,
      selectedSortby,
      searchWord,
      limit,
      page
    ).then((resp) => {
      setProducts(resp.products);
      setTotalCount(resp.totalCount);
    });

    // setCount
  }, [selectedBrands, selectedTypes, selectedSortby, searchWord]);

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

  const updatePage = () => {
    setPage((prevPage) => prevPage + 1);

    getProducts(
      selectedTypes,
      selectedBrands,
      selectedSortby,
      searchWord,
      limit,
      page
    ).then((resp) => {
      setProducts((prevProducts) => [...prevProducts, ...resp.products]);
    });
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
      <Products products={products} updatePage={updatePage} />
    </div>
  );
}
