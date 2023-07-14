import { useState } from 'react';
import Card from './Card';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onFormSubmit({ name, age, level, tech });
  };

  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
      />

      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
      />

      <label htmlFor="level">Level</label>
      <select
        id="level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
      >
        <option value="">Select level</option>
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>

      <label htmlFor="tech">Technology</label>
      <select
        id="tech"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg  border-gray-700 p-3 w-96'
      >
        <option value="">Select technology</option>
        <option value="react">React</option>
        <option value="dotnet">.NET</option>
      </select>

      <button type='submit' className='text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4'>Submit</button>
    </form>
    </Card>
  );
}

export default FormComponent;
