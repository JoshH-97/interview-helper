import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent';
import QuestionComponent from './components/QuestionComponent';
import Header from './components/Header';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<{ level: string; tech: string } | null>(null);

  const handleFormSubmit = (data: { level: string; tech: string }) => {
    setFormSubmitted(true);
    setFormData(data);
  };

  return (
    <div className='h-screen bg-black'>
      <Header />
      {formSubmitted && formData ? (
        <QuestionComponent level={formData.level} tech={formData.tech} />
      ) : (
        <FormComponent onFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
