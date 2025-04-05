import React from 'react';
import { FaCode, FaUser, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">CodeDash</h1>
        <nav className="space-y-4">
          <Link to="/Dashboard" className="flex items-center gap-2 hover:text-yellow-300">
            <FaChartBar /> Dashboard
          </Link>
          <Link to="/problemList" className="flex items-center gap-2 hover:text-yellow-300">
            <FaCode /> Problems
          </Link>
          <Link to="/Dashboard" className="flex items-center gap-2 hover:text-yellow-300">
            <FaUser /> Profile
          </Link>
          <Link to="/">
            <button className="flex items-center gap-2 hover:text-yellow-300" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Welcome Back hacker!</h2>
          <div className="text-gray-600">Today's Date</div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-bold text-blue-700">Solved Problems</h3>
            <p className="text-3xl font-semibold mt-2">42</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-bold text-green-700">Total Submissions</h3>
            <p className="text-3xl font-semibold mt-2">128</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="text-lg font-bold text-yellow-700">Success Rate</h3>
            <p className="text-3xl font-semibold mt-2">75%</p>
          </div>
        </div>

        {/* Placeholder for charts or recent activity */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Recent Submissions</h3>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
