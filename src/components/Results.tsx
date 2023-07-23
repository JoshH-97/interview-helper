import React from 'react';
import Card from './UI/Card';

type Question = {
  [key: number]: string;
};

type Form = {
  name: string;
  age: string;
  level: string;
  tech: string;
};

type ResultsProps = {
  data: {
    form: Form;
    questions: Question;
    totalScore: number;
  };
};

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <Card>
      <h2>Results:</h2>
      <p>Name: {data.form.name}</p>
      <p>Age: {data.form.age}</p>
      <p>Tech: {data.form.tech}</p>
      <p>Level: {data.form.level}</p>
      <p>Total Score: {data.totalScore}</p>
    </Card>
  );
};

export default Results;
