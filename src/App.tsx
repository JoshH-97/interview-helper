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
  const [comments, setComments] = useState('');

  const handleFormSubmit = (data: FormData) => {
    setFormSubmitted(true);
    setFormData(data);
  };

  const handleValueChange = (rowId: number, value: string) => {
    setSelectedValues(prevSelectedValues => ({
      ...prevSelectedValues,
      [rowId]: value,
    }));
  };

  const handleQuestionSubmit = (comments: string, totalScore: number ) => {
    setTotalScore(totalScore);
    setComments(comments);
    setShowResults(true);
  };

  return (
    <div>
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
            comments: comments, 
          }}
        />
      )}
    </div>
  );
}
export default App;
