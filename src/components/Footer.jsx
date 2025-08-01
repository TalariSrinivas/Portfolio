import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white py-12 border-t border-gray-800">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center space-y-6">

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl text-white">
            <a
              href="https://www.linkedin.com/in/talari-srinivas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/TalariSrinivas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FaGithub />
            </a>
          </div>

          {/* Footer Text */}
          <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 Talari Srinivas. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
