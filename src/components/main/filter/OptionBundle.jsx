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
    <div className='flex overflow-x-auto whitespace-no-wrap h-12 justify-center gap-2'>
      <p className='font-bold mt-1 flex-shrink-0'>{title}</p>

      {optionComponents}
    </div>
  );
}
