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
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
