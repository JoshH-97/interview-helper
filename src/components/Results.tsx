import React from 'react';
import Card from './UI/Card';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

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
    comments: string;
  };
};

const PdfDoc: React.FC<ResultsProps> = ({ data }) => {
  return (
    <Document>
      <Page>
        <Text>Name: {data.form.name}</Text>
        <Text>Age: {data.form.age}</Text>
        <Text>Tech: {data.form.tech}</Text>
        <Text>Level: {data.form.level}</Text>
        <Text>Total Score: {data.totalScore}</Text>
        <Text>Comments: {data.comments}</Text> 
      </Page>
    </Document>
  );
};

const ExportPdf: React.FC<ResultsProps> = ({ data }) => {
  return (
    <div className='pt-5'>
      <PDFDownloadLink
        className='text-white bg-orange-600 hover:bg-orange-700 focus:ring-1 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5'
        document={<PdfDoc data={data} />} // Pass the data including comments to PdfDoc
        fileName='results.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Export PDF')}
      </PDFDownloadLink>
    </div>
  );
  };
const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <Card>
      <h2 className='flex justify-center text-4 text-2xl pb-3'>Results</h2>
      <div className='block mb-2 text-sm font-normal text-white bg-gray-800 border rounded-lg border-gray-700 p-2 w-96'>
        <p className='block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Name: {data.form.name}</p>
        <p className='block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Age: {data.form.age}</p>
        <p className='capitalize block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Tech: {data.form.tech}</p>
        <p className='capitalize block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Level: {data.form.level}</p>
        <p className='block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Total Score: {data.totalScore}</p>
        <p className='block mb-2 text-lg font-normal text-white bg-gray-800 p-2 w-100%'>Comments: {data.comments}</p>
      </div>
      <ExportPdf data={data} />
    </Card>
  );
};

export default Results;
