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
  ChevronRight,
  ListChecks,
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const buttonStyle =
    'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center gap-2';

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <Hammer className="w-6 h-6" />
          <span>CodeMaster</span>
        </Link>

        {/* Center: Main Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:underline">
            <Info className="w-5 h-5" /> About Us
          </Link>
          <Link to="/services" className="flex items-center gap-1 hover:underline">
            <Hammer className="w-5 h-5" /> Services
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:underline">
            <Phone className="w-5 h-5" /> Contact
          </Link>
          <Link to="/problemList" className="flex items-center gap-1 hover:underline">
            <ListChecks className="w-5 h-5" /> Problem List
          </Link>
        </div>

        {/* Right: Auth Controls */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="flex items-center gap-1 hover:underline">
                <LayoutDashboard className="w-5 h-5" /> Dashboard
              </Link>
              <Link to="/profile" className="flex items-center gap-1 hover:underline">
                <User className="w-5 h-5" /> Profile
              </Link>
              <button onClick={handleLogout} className={buttonStyle}>
                <LogOut className="w-5 h-5" /> Logout
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={buttonStyle}>
                <LogIn className="w-5 h-5" /> Login
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/signup" className={buttonStyle}>
                <UserPlus className="w-5 h-5" /> Signup
                <ChevronRight className="w-4 h-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
