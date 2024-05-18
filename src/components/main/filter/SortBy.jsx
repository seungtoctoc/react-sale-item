import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function SortBy(props) {
  const sortby = ['추천순', '할인율순', '낮은 가격순', '높은 가격순'];
  const sortbyForReq = ['default', 'highDiscountRate', 'lowPrice', 'highPrice'];

  const totalCount = props.totalCount;
  const setSelectedSortby = props.setSelectedSortby;
  const [currentSortby, setCurrentSortby] = useState(sortby[0]);

  const clickSortby = (idx) => {
    setSelectedSortby(sortbyForReq[idx]);
    setCurrentSortby(sortby[idx]);
  };

  return (
    <div className='container flex justify-between pt-3 pb-2 border-b mb-3'>
      <p className='text-lg ml-2'>{totalCount}개 항목</p>
      <Dropdown>
        <Dropdown.Toggle
          className='border rounded-xl'
          variant='light'
          id='dropdown-basic'
        >
          {currentSortby}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              clickSortby(0);
            }}
          >
            추천순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              clickSortby(1);
            }}
          >
            할인율순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              clickSortby(2);
            }}
          >
            낮은 가격순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              clickSortby(3);
            }}
          >
            높은 가격순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
