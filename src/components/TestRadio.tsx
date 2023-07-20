function TestRadio() {
  return (
    <div>
      <ul className='items-center w-full text-sm font-medium rounded-lg sm:flex bg-gray-700 border-gray-600 text-white space-x-4'>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 space-x-4'>
          <div className='flex items-center px-2'>
            <input
              id='horizontal-list-radio-license1'
              type='radio'
              value='1'
              name='list-radio'
              className='w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500'
            />
            <label
              htmlFor='horizontal-list-radio-license1'
              className='w-full py-3 ml-2 text-sm font-medium text-white'
            >
              Bad
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r'>
          <div className='flex items-center px-2'>
            <input
              id='horizontal-list-radio-id'
              type='radio'
              value='2'
              name='list-radio'
              className='w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500'
            ></input>
            <label
              htmlFor='horizontal-list-radio-id'
              className='w-full py-3 ml-2 text-sm font-medium text-white'
            >
              Average
            </label>
          </div>
        </li>
        <li className='w-full dark:border-gray-600'>
          <div className='flex items-center px-2'>
            <input
              id='horizontal-list-radio-millitary'
              type='radio'
              value='3'
              name='list-radio'
              className='w-4 h-4 text-green-600 bg-gray-100  focus:ring-green-500'
            ></input>
            <label
              htmlFor='horizontal-list-radio-millitary'
              className='w-full py-3 ml-2 text-sm font-medium text-white dark:text-gray-300'
            >
              Good
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TestRadio;
