import React from 'react';

import Option from './Option';

export default function OptionBundle(props) {
  const title = props.title;
  const options = props.options;
  const selectedOptions = props.selectedOptions;
  const setSelectedOptions = props.setSelectedOptions;

  const addOption = (optionToAdd) => {
    setSelectedOptions([...selectedOptions, optionToAdd]);
  };

  const removeOption = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== optionToRemove
    );
    setSelectedOptions(updatedOptions);
  };

  const optionComponents = options.map((option, idx) => (
    <Option
      key={option}
      optionName={option}
      addOption={addOption}
      removeOption={removeOption}
    />
  ));

  return (
    <div className='flex h-12 justify-center'>
      <p className='font-bold mr-3 mt-1'>{title}</p>

      {optionComponents}
    </div>
  );
}
