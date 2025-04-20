import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const AddContestQuestion = () => {
  const [formData, setFormData] = useState({
    contestId: '',
    question: '',
    input: '',
    output: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contest-question/create-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || 'Failed to add question');

      alert(result.message);
      setFormData({ contestId: '', question: '', input: '', output: '' });
    } catch (err) {
      console.error("Error adding question:", err);
      alert("Something went wrong while adding the question.");
    }
  };

  const handleSubmitAnother = (e) => {
    e.preventDefault();
    alert("Another submit button clicked!");
  };

  const buttonStyle =
    'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center gap-2';

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Add Question to Contest
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Contest ID */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Contest ID</label>
            <input
              type="text"
              name="contestId"
              required
              value={formData.contestId}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Question */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Question</label>
            <textarea
              name="question"
              rows="4"
              required
              value={formData.question}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* Input */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Input</label>
            <textarea
              name="input"
              rows="4"
              required
              value={formData.input}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* Output */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Output</label>
            <textarea
              name="output"
              rows="4"
              required
              value={formData.output}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-0"> {/* Reduced distance between buttons */}
            <button
              type="submit"
              className={buttonStyle}
            >
               Add Question
            </button>
            <button
              type="button"
              onClick={handleSubmitAnother}
              className={buttonStyle}
            >
               Submit 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContestQuestion;
