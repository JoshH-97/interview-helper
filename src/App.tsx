import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import QuestionComponent, { SelectedValues } from './components/QuestionComponent';
import Header from './components/Header';
import Results from './components/Results';

type FormData = {
  level: string;
  tech: string;
  name: string;
  age: string;
};

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});
  const [totalScore, setTotalScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    setFormSubmitted(true);
    setFormData(data);
  };

  const handleValueChange = (rowId: number, value: string) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [rowId]: value,
    }));
  };

  const handleQuestionSubmit = (totalScore: number) => {
    setTotalScore(totalScore);
    setShowResults(true);
  };

  return (
    <div className='h-screen bg-black'>
      <Header />
      {!formSubmitted ? (
        <FormComponent onFormSubmit={handleFormSubmit} />
      ) : !showResults ? ( 
        <QuestionComponent
          level={formData!.level}
          tech={formData!.tech}
          onValueChange={handleValueChange}
          onSubmit={handleQuestionSubmit} 
        />
      ) : (
        <Results
          data={{
            form: formData!,
            questions: selectedValues,
            totalScore: totalScore,
          }}
        />
      )}
    </div>
  );
}
export default App;