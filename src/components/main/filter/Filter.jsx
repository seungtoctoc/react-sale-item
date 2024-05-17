import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import SortBy from './SortBy';
import OptionBundle from './OptionBundle';

export default function Filter(props) {
  const includeBrand = props.includeBrand;
  const exceptBrand = props.exceptBrand;
  const includeType = props.includeType;
  const exceptType = props.exceptType;
  const setSelectedSortby = props.setSelectedSortby;
  const setSearchWord = props.setSearchWord;
  const totalCount = props.totalCount;

  const brands = ['NIKE', 'ADIDAS', 'NEWBALANCE'];
  const types = ['FOOTWEAR', 'APPAREL'];

  return (
    <div className='mb-1'>
      <SearchBar setSearchWord={setSearchWord} />
      <SortBy totalCount={totalCount} setSelectedSortby={setSelectedSortby} />
      <OptionBundle
        title='브랜드'
        options={brands}
        includeOption={includeBrand}
        exceptOption={exceptBrand}
      />
      <OptionBundle
        title='카테고리'
        options={types}
        includeOption={includeType}
        exceptOption={exceptType}
      />
    </div>
  );
}
