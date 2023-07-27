import React, { useState } from 'react';
import questionsData from '../data/questionsdata.json';
import Card from './UI/Card';
import RadioV2 from './RadioV2';

export type SelectedValues = {
  [key: number]: string;
};

type QuestionComponentProps = {
  level: string;
  tech: string;
  onValueChange: (rowId: number, value: string) => void;
  onSubmit: (comments: string, totalScore: number) => void; // Include the 'comments' argument
};
function QuestionComponent({ level, tech, onSubmit }: QuestionComponentProps) {
  const questions = (questionsData as {
    [key: string]: {
      [key: string]: string[];
    };
  })[level][tech];

  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});
  const [comments, setComments] = useState('');

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

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
    onSubmit(comments, total);
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
                <RadioV2 rowId={index} onValueChange={handleValueChange} selectedValue={selectedValues[index] || ''} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <label htmlFor='message'>Comments</label>
        <textarea
        id='message'
        value={comments}
        onChange={handleCommentsChange}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        placeholder='Write your comments here...'
      ></textarea>
        <button
          className="text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 float-right"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </Card>
  );
}

export default QuestionComponent;
