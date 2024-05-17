import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Option(props) {
  const [clicked, setClicked] = useState(false);

  const optionName = props.optionName;
  const includeOption = props.includeOption;
  const exceptOption = props.exceptOption;

  const clickOption = () => {
    if (clicked) {
      exceptOption(optionName);
      setClicked(false);
      return;
    }

    includeOption(optionName);
    setClicked(true);
  };

  return (
    <div
      className={`mr-2 h-9 border rounded-xl hover:bg-gray-100 ${
        clicked ? 'bg-gray-200' : ''
      }`}
      onClick={() => clickOption()}
    >
      <p className='ml-4 mr-4 mt-1'>{optionName}</p>
    </div>
  );
}
