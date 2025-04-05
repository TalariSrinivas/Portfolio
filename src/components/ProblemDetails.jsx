import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProblemDetails = ({ problemId }) => {
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    if (!problemId) return;

    axios.get(`http://localhost:5000/api/problems/${problemId}`)
      .then(res => setProblem(res.data))
      .catch(err => {
        console.error("Error fetching problem details:", err);
        setProblem(null);
      });
  }, [problemId]);

  if (!problem) {
    return <div className="text-gray-600">Loading problem details...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{problem.title}</h1>

      <section className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Description:</h2>
        <p className="text-gray-700 whitespace-pre-line">{problem.description}</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Input Format:</h2>
        <p className="text-gray-700">{problem.inputFormat}</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Output Format:</h2>
        <p className="text-gray-700">{problem.outputFormat}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Sample Test Cases:</h2>
        {problem.sampleCases && problem.sampleCases.length > 0 ? (
          <ul className="space-y-2">
            {problem.sampleCases.map((testCase, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">
                <p><strong>Input:</strong> {testCase.input}</p>
                <p><strong>Output:</strong> {testCase.output}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No sample test cases available.</p>
        )}
      </section>
    </div>
  );
};

export default ProblemDetails;
