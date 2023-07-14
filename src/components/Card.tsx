import React from 'react';

function Card(props: any) {
  return (
    <div className='flex items-center justify-center '>
      <div className='bg-gray-800 p-4 border rounded-2xl  border-gray-700 text-white'>{props.children}</div>
    </div>
  );
}

export default Card;
