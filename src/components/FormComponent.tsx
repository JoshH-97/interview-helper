import { useState } from 'react';
import Card from './UI/Card';

type FormValues = {
  name: string;
  age: string;
  level: string;
  tech: string;
};

function FormComponent({ onFormSubmit }: { onFormSubmit: (data: FormValues) => void }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [level, setLevel] = useState('');
  const [tech, setTech] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    level: '',
    tech: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name === '' ? 'Name is required' : '',
      age: age === '' ? 'Age is required' : '',
      level: level === '' ? 'Level is required' : '',
      tech: tech === '' ? 'Technology is required' : '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setErrors({ name: '', age: '', level: '', tech: '' });
    onFormSubmit({ name, age, tech, level });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    setErrors({ ...errors, name: '' });
  };

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
    setErrors({ ...errors, age: '' });
  };

  const handleChangeTech = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTech(e.target.value);
    setErrors({ ...errors, tech: '' });
  };

  const handleChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
    setErrors({ ...errors, level: '' });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={handleChangeName}
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg border-gray-700 p-3 w-96'
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}

        <label htmlFor='age'>Age</label>
        <input
          type='text'
          id='age'
          value={age} 
          onChange={handleChangeAge}
          className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg border-gray-700 p-3 w-96'
        />
        {errors.age && <p className='text-red-500 text-sm'>{errors.age}</p>}

        <div className='flex gap-4'>
          <div className='w-1/2'>
            <label htmlFor='tech'>Technology</label>
            <select
              id='tech'
              value={tech}
              onChange={handleChangeTech}
              className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg border-gray-700 p-3 w-full'
            >
              <option value=''>Select technology</option>
              <option value='react'>React</option>
              <option value='dotnet'>.NET</option>
            </select>
            {errors.tech && <p className='text-red-500 text-sm'>{errors.tech}</p>}
          </div>

          <div className='w-1/2'>
            <label htmlFor='level'>Level</label>
            <select
              id='level'
              value={level}
              onChange={handleChangeLevel}
              className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg border-gray-700 p-3 w-full'
            >
              <option value=''>Select level</option>
              <option value='junior'>Junior</option>
              <option value='mid'>Mid</option>
              <option value='senior'>Senior</option>
            </select>
            {errors.level && <p className='text-red-500 text-sm'>{errors.level}</p>}
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-orange-600 hover:bg-orange-700 focus:ring-1 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4'
        >
          Submit
        </button>
      </form>
    </Card>
  );
}

export default FormComponent;
