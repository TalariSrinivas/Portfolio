import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/problems')
      .then(res => {
        if (Array.isArray(res.data)) {
          setProblems(res.data);
        } else if (Array.isArray(res.data.problems)) {
          setProblems(res.data.problems);
        } else {
          setProblems([]);
        }
      })
      .catch(err => {
        console.error("Error fetching problems:", err);
        setProblems([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Problem List</h2>

        {problems.length === 0 ? (
          <div className="text-center text-gray-500">No problems available.</div>
        ) : (
          <ul className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
            {problems.map((problem) => (
              <li
                key={problem._id}
                onClick={() => navigate(`/problems/${problem._id}`)}
                className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-blue-800">{problem.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProblemList;
