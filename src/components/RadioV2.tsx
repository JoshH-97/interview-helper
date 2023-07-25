import React, { useState } from 'react';

interface RadioButtonsProps {
  rowId: number;
  onValueChange: (rowId: number, value: string) => void;
  selectedValue: string;
}

function RadioV2({ rowId, onValueChange, selectedValue }: RadioButtonsProps) {
  const [selectedValueInternal, setSelectedValueInternal] = useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValueInternal(newValue);
    onValueChange(rowId, newValue);
  };

  const radioGroupName = `radioGroup-${rowId}`;
  return (
    <div>
      <ul className='items-center w-full text-sm font-medium rounded-lg sm:flex bg-gray-700 border-gray-600 text-white'>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r'>
          <div className='flex items-center px-2'>
            <input
              id={`${radioGroupName}bad-radio`}
              type='radio'
              value='1'
              name={radioGroupName}
              className='w-4 h-4'
              checked={selectedValueInternal === '1'}
              onChange={handleChange}
            />
            <label htmlFor={`${radioGroupName}bad-radio`} className='w-full py-3 ml-2 text-sm font-medium text-white'>
              Bad
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r'>
          <div className='flex items-center px-2'>
            <input
              id={`${radioGroupName}average-radio`}
              type='radio'
              value='2'
              name={radioGroupName}
              className='w-4 h-4 '
              checked={selectedValueInternal === '2'}
              onChange={handleChange}
            ></input>
            <label htmlFor={`${radioGroupName}average-radio`} className='w-full py-3 ml-2 text-sm font-medium text-white'>
              Average
            </label>
          </div>
        </li>
        <li className='w-full'>
          <div className='flex items-center px-2'>
            <input
              id={`${radioGroupName}good-radio`}
              type='radio'
              value='3'
              name={radioGroupName}
              className='w-4 h-4 '
              checked={selectedValueInternal === '3'}
              onChange={handleChange}
            ></input>
            <label
              htmlFor={`${radioGroupName}good-radio`}
              className='w-full py-3 ml-2 text-sm font-medium text-white'
            >
              Good
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RadioV2;
