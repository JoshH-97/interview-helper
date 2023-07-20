import Card from "./UI/Card";

interface ResultComponentProps {
  formData: { name: string, age: string, level: string; tech: string };
  totalScore: number;
}

const Results = ({ formData, totalScore }: ResultComponentProps) => {
  return (
    <Card>
    <div className="text-white">
      <h1>Result</h1>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Level: {formData.level}</p>
      <p>Tech: {formData.tech}</p>
      <p>Total Score: {totalScore}</p>
    </div>
    </Card>
  );
};

export default Results;