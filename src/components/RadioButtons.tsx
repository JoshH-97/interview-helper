import React, { useState } from "react";

interface RadioButtonsProps {
  rowId: number; 
  onValueChange: (rowId: number, value: string) => void;
  selectedValue: string;
}

export default function RadioButtons({ rowId, onValueChange, selectedValue }: RadioButtonsProps) {
  const [selectedValueInternal, setSelectedValueInternal] = useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValueInternal(newValue);
    onValueChange(rowId, newValue);
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
          checked={selectedValueInternal === "1"}
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
          checked={selectedValueInternal === "2"}
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
          checked={selectedValueInternal === "3"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
