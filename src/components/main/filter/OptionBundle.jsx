import React from 'react';

import Option from './Option';

export default function OptionBundle(props) {
  const title = props.title;
  const options = props.options;
  const includeOption = props.includeOption;
  const exceptOption = props.exceptOption;

  const optionComponents = options.map((option, idx) => (
    <Option
      key={option}
      optionName={option}
      includeOption={includeOption}
      exceptOption={exceptOption}
    />
  ));

  return (
    <div className='flex h-12 justify-center'>
      <p className='font-bold mr-3 mt-1'>{title}</p>

      {optionComponents}
    </div>
  );
}
