import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProblemDetails from './ProblemDetails';
import CodeEditor from './CodeEditor';

const ProblemsPage = () => {
  const { id } = useParams(); // get problem ID from route
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("cpp"); // default language
  const [results, setResults] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/submit', {
        code,
        language,
        problemId: id,
      });
      setResults(res.data.results);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-auto border-r">
        <ProblemDetails problemId={id} />

        {results && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Test Case Results:</h3>
            <ul className="space-y-2">
              {results.map((res, idx) => (
                <li key={idx} className={`p-3 rounded-lg ${res.status === "Passed" ? "bg-green-100" : "bg-red-100"}`}>
                  <p><strong>Input:</strong> {res.input}</p>
                  <p><strong>Expected:</strong> {res.expectedOutput}</p>
                  <p><strong>Output:</strong> {res.actualOutput}</p>
                  <p><strong>Status:</strong> {res.status}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-1/2 p-4 flex flex-col">
        {/* Language Selection */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mb-4 p-2 rounded border"
        >
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
        </select>

        <CodeEditor code={code} setCode={setCode} language={language} />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 self-start"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProblemsPage;
