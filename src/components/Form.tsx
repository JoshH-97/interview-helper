import React from 'react';
import Card from './UI/Card';
import { useForm } from 'react-hook-form';

function Form() {
  const {register, handleSubmit, reset} = useForm();

  const onSubmitForm = (data: any) => {
    console.log(data);

    reset();
  }

  return (
    <Card>
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className='mb-6'>
        <label htmlFor='name' className='p-2'>
          Name
        </label>
        <input
          id='name'
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
          {...register('name', { required: true })}
        ></input>
      </div>
      <div className='mb-6'>
        <label htmlFor='age' className='p-2'>
          Age
        </label>
        <input
          id='age'
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
          {...register('age', { required: true })}
        ></input>
      </div>
      <div className='mb-6'>
        <label htmlFor='level' className='p-2'>
          Level
        </label>
        <select
          id='level'
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
          {...register('level', { required: true })}
        >
          <option value="">Select an option</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <div className='mb-6'>
        <label htmlFor='tech' className='p-2'>
          Level
        </label>
        <select
          id='tech'
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
          {...register('tech', { required: true })}
        >
          <option value="">Select an option</option>
          <option value='react'>React</option>
          <option value='dotnet'>.Net</option>
        </select>
      </div>

      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'>Submit</button>
    </form>
    </ Card>
  );
}

export default Form;
