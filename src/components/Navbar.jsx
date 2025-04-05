import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home,
  Info,
  Phone,
  Hammer,
  User,
  LogIn,
  LogOut,
  UserPlus,
  LayoutDashboard,
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <Hammer className="w-6 h-6" />
          <span>CodeMaster</span>
        </Link>

        {/* Center: Main Navigation */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:underline">
            <Info className="w-4 h-4" /> About Us
          </Link>
          <Link to="/services" className="flex items-center gap-1 hover:underline">
            <Hammer className="w-4 h-4" /> Services
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:underline">
            <Phone className="w-4 h-4" /> Contact
          </Link>
          <Link to="/problemList" className="flex items-center gap-1 hover:underline">
            <Phone className="w-4 h-4" /> ProblemList
          </Link>
        </div>

        {/* Right: Auth Controls */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="flex items-center gap-1 hover:underline">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link to="/profile" className="flex items-center gap-1 hover:underline">
                <User className="w-4 h-4" /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/Login" className="flex items-center gap-1 hover:underline">
                <LogIn className="w-4 h-4" /> Login
              </Link>
              <Link to="/Signup" className="flex items-center gap-1 hover:underline">
                <UserPlus className="w-4 h-4" /> Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
