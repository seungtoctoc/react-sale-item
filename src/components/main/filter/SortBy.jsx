import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function SortBy(props) {
  const totalCount = props.totalCount;

  return (
    <div className='container flex justify-between pt-3 pb-2 border-b mb-3'>
      <p className='text-lg ml-2'>{totalCount}개 항목</p>
      <Dropdown>
        <Dropdown.Toggle
          className='border rounded-xl'
          variant='light'
          id='dropdown-basic'
        >
          추천순
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>할인율순</Dropdown.Item>
          <Dropdown.Item>낮은 가격순</Dropdown.Item>
          <Dropdown.Item>높은 가격순</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
