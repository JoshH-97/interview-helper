import React, { useState } from 'react';
import RadioButtons from './RadioButtons';
import questionsData from '../data/questionsdata.json';
import Card from './UI/Card';

export type SelectedValues = {
  [key: number]: string;
};

type QuestionComponentProps = {
  level: string;
  tech: string;
  onValueChange: (rowId: number, value: string) => void;
  onSubmit: (totalScore: number) => void; 
};
function QuestionComponent({ level, tech, onSubmit }: QuestionComponentProps) {
  const questions = (questionsData as {
    [key: string]: {
      [key: string]: string[];
    };
  })[level][tech];

  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});

  const handleValueChange = (rowId: number, value: string) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [rowId]: value,
    }));
  };

  const handleSubmit = () => {
    let total = 0;
    for (const key in selectedValues) {
      total += parseInt(selectedValues[key]);
    }
    onSubmit(total);
  };
  const TABLE_HEAD = ["Question", "Score"];
  const classes = "p-5";
  return (
    <Card>
      <h1 className="capitalize flex justify-center text-4 text-2xl">
        {tech}-{level}
      </h1>
      <table>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questions.map((question: string, index: number) => (
            <tr key={index}>
              <td className={classes}>{question}</td>
              <td className={classes}>
                <RadioButtons rowId={index} onValueChange={handleValueChange} selectedValue={selectedValues[index] || ''} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button
          className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </Card>
  );
}

export default QuestionComponent;
