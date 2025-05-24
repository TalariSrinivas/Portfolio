import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  FileText,
  Layers,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import logo from '/B3.png'; // Adjust this path as needed

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', icon: <Home size={20} />, href: '/' },
    { label: 'Portfolio', icon: <Briefcase size={20} />, href: '/about' },
    { label: 'Resume', icon: <FileText size={20} />, href: '/contact' },
    { label: 'Work', icon: <Layers size={20} />, href: '/services' },
    { label: 'Contact', icon: <Mail size={20} />, href: '/login' },
  ];

  const renderLinks = () =>
    navLinks.map(({ label, icon, href }) => {
      const isActive = location.pathname === href;
      return (
        <Link
          key={label}
          to={href}
          onClick={() => setMenuOpen(false)}
          className={`transition flex items-center gap-1 ${
            isActive ? 'text-pink-500 glow' : 'hover:text-pink-500'
          }`}
        >
          {icon}
          {label}
        </Link>
      );
    });

  return (
    <>
      <style>{`
        @keyframes spin {
          to {
            --a: 360deg;
          }
        }

        @property --a {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .hire-btn-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 4px;
          padding: 2px;
          background: transparent;
          z-index: 0;
          width: 100px;
          height: 40px;
        }

        .hire-btn-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(from var(--a), #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #f72585);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: spin 4s linear infinite;
          z-index: -1;
        }

        .hire-btn {
          position: relative;
          border-radius: 4px;
          background: black;
          color: white;
          padding: 0;
          width: 100%;
          height: 100%;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: background-color 0.3s ease;
        }

        .hire-btn:hover {
          background-color: #1a1a1a;
        }

        .glow {
          animation: pinkGlow 1.5s ease-in-out infinite alternate;
        }

        @keyframes pinkGlow {
          from {
            text-shadow: 0 0 5px #f72585, 0 0 10px #f72585, 0 0 15px #f72585;
          }
          to {
            text-shadow: 0 0 10px #f72585, 0 0 20px #f72585, 0 0 30px #f72585;
          }
        }
      `}</style>

      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-[#0f0f0f] text-white shadow-md sticky top-0 z-50">
        {/* Logo with Image */}
        <div className="flex items-center gap-2 text-2xl font-bold font-mono tracking-tight">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          Srinivas<span className="text-pink-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-base">
          {renderLinks()}
          <div className="hire-btn-wrapper ml-4">
            <a href="/login" className="hire-btn">
              Hire me
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu (Fixed so it won't scroll with page) */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#0f0f0f] text-white px-6 py-6 space-y-6 font-mono text-base shadow-md z-40">
          {renderLinks()}
          <div className="hire-btn-wrapper">
            <a href="/login" className="hire-btn">
              Hire me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
