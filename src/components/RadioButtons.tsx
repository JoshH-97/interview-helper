import React, { useState } from 'react';

interface RadioButtonsProps {
  rowId: number;
  onValueChange: (rowId: number, value: string) => void;
}

export default function RadioButtons({ rowId, onValueChange }: RadioButtonsProps) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const radioGroupName = `radioGroup-${rowId}`;

  return (
    <div className="flex flex-wrap">
      <div className="flex items-center mr-4">
        <input
          id={`${radioGroupName}-red-radio`}
          type="radio"
          value="1"
          name={radioGroupName}
          className="bg-red-600 w-4 h-4"
          checked={selectedValue === '1'}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center mr-4">
        <input
          id={`${radioGroupName}-amber-radio`}
          type="radio"
          value="2"
          name={radioGroupName}
          className="bg-orange-600 w-4 h-4"
          checked={selectedValue === '2'}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center mr-4">
        <input
          id={`${radioGroupName}-green-radio`}
          type="radio"
          value="3"
          name={radioGroupName}
          className="w-4 h-4"
          checked={selectedValue === '3'}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
