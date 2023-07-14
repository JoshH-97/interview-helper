import React from 'react';

export default function RadioButtons() {
  return (
    <div className='flex flex-wrap'>
      <div className='flex items-center mr-4'>
        <input id='red-radio' type='radio' value='0' name='colored-radio' className='bg-red-600 w-4 h-4'></input>
      </div>
      <div className='flex items-center mr-4'>
        <input id='amber-radio' type='radio' value='1' name='colored-radio' className='bg-orange-600 w-4 h-4'></input>
      </div>
      <div className='flex items-center mr-4'>
        <input id='green-radio' type='radio' value='2' name='colored-radio' className='w-4 h-4'></input>
      </div>
    </div>
  );
}
