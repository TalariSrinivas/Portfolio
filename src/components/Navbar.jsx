import React, { useState } from "react";
import pic from "/srinivas.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "#home", icon: <Home size={18} /> },
    { id: 2, text: "About", path: "#about", icon: <User size={18} /> },
    { id: 3, text: "Works", path: "#portfolio", icon: <Layers size={18} /> },
    { id: 4, text: "Experience", path: "#experience", icon: <Briefcase size={18} /> },
    { id: 5, text: "Contact", path: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed left-0 top-0 right-0 z-50 bg-[#0d1117]">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex space-x-3 items-center">
            <img
              src={pic}
              className="w-12 h-12 rounded-full border-2 border-teal-500 shadow-md"
              alt="Srinivas Profile"
            />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer select-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 text-2xl font-bold">
                  SRI
                </span>
                NIVAS
              </h1>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-10 text-sm font-medium items-center text-white">
            {navItems.map(({ id, text, path, icon }) => (
              <li key={id} className="flex items-center space-x-1 group">
                <a
                  href={path}
                  onClick={() => setMenu(false)}
                  className="flex items-center space-x-2 hover:text-teal-400 hover:scale-105 transition duration-200"
                >
                  {icon}
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer text-white"
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-lg">
            <ul className="flex flex-col items-center justify-center space-y-6 py-6 text-lg font-semibold text-white">
              {navItems.map(({ id, text, path, icon }) => (
                <li key={id}>
                  <a
                    href={path}
                    onClick={() => setMenu(false)}
                    className="flex items-center space-x-2 hover:text-teal-400 transition duration-200"
                  >
                    {icon}
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
