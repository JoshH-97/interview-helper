import React from 'react';
import Card from './UI/Card';
import RadioButtons from './UI/RadioButtons';
import questionsData from '../data/questions.json'

interface QuestionsData {
  junior: {
    react: string[];
    dotnet: string[];
  };
  mid: {
    react: string[];
    dotnet: string[];
  };
  senior: {
    react: string[];
    dotnet: string[];
  };
}
interface Props {
  level: keyof QuestionsData;
  tech: keyof QuestionsData['junior']
}

function QuestionTable({level, tech}: Props) {
  const questions = questionsData[level][tech];
  // const reactQuestions = [
  //   {
  //     id: 1,
  //     question: '1. What is React and why is it popular?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 2,
  //     question: '2. What is JSX in React?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 3,
  //     question: '3. What are components in React?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 4,
  //     question: '4. What is the difference between functional components and class components?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 5,
  //     question: '5. What is state in React?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 6,
  //     question: '6. What is the purpose of props in React?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 7,
  //     question: '7. What is the significance of the virtual DOM in React?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 8,
  //     question: '8. What is the role of React Router?',
  //     level: 'junior',
  //   },
  //   {
  //     id: 9,
  //     question: "9. What is the purpose of the 'key' prop in React?",
  //     level: 'junior',
  //   },
  //   {
  //     id: 10,
  //     question: '10. What are lifecycle methods in React?',
  //     level: 'junior',
  //   },
  // ];

  const TABLE_HEAD = ['Question', 'Score'];
  const classes = 'p-5';
  return (
    <Card>
      <table>
        <thead>
          <tr>
            {TABLE_HEAD.map(head => (
              <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td className={classes}>{question}</td>
              <td className={classes}>
                <RadioButtons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default QuestionTable;
