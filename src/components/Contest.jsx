import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateContest = () => {
  const [formData, setFormData] = useState({
    contestId: '',
    password: '',
    info: '',
    startTime: '',
    stopTime: '',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contest/create-contest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create contest');
      }

      alert(result.message); // Show success message
      setFormData({ contestId: '', password: '', info: '', startTime: '', stopTime: '' });

      // Redirect to the "Add Contest Questions" page after creating the contest
      navigate('/addContestQuestions');
    } catch (err) {
      console.error('Error creating contest:', err);
      alert('Something went wrong while creating the contest.');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create a New Contest
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

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Info */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Contest Info</label>
            <textarea
              name="info"
              rows="4"
              required
              value={formData.info}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* Start Time */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Start Time</label>
            <input
              type="datetime-local"
              name="startTime"
              required
              value={formData.startTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Stop Time */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Stop Time</label>
            <input
              type="datetime-local"
              name="stopTime"
              required
              value={formData.stopTime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Contest
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContest;
