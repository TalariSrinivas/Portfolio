import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProblemDetails from './ProblemDetails';
import CodeEditor from './CodeEditor';

import { useUser } from '../context'; // adjust path if needed

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProblemsPage = () => {
  const { id } = useParams();
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("cpp");
  const [results, setResults] = useState(null);

  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate])

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${backendUrl}/api/submit`, {
        code,
        language,
        problemId: id,
        email: user,
      });
      setResults(res.data.results);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed");
    }
  };

  return (
    <>
      <div className='w-full bg-black text-3xl text-white'>{user}</div>
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      {/* Problem Details */}
      <div className="w-1/2 p-6 overflow-auto border-r border-gray-300 dark:border-gray-700">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <ProblemDetails problemId={id} />
        </div>

        {/* Test Case Results */}
        {results && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-300">
              Test Case Results:
            </h3>
            <ul className="space-y-4">
              {results.map((res, idx) => (
                <li
                  key={idx}
                  className={`p-4 rounded-xl text-sm ${
                    res.status === "Passed"
                      ? "bg-green-100 dark:bg-green-800"
                      : "bg-red-100 dark:bg-red-800"
                  }`}
                >
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

      {/* Code Editor */}
      <div className="w-1/2 p-6 flex flex-col space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
          {/* Language Selector */}
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            Select Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        {/* Code Editor */}
        <div className="flex-grow">
          <CodeEditor code={code} setCode={setCode} language={language} />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 text-white py-2 px-6 rounded-xl transition shadow-md self-start"
        >
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default ProblemsPage;
