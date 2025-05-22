import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Home = () => {
  return (
    <>
      <style>{`
        @property --a {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .border-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          overflow: hidden;
        }

        .border-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 4px;
          background: conic-gradient(from var(--a), #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #f72585);
          border-radius: inherit;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          animation: spin 4s linear infinite;
          z-index: 0;
        }

        .profile-image {
          position: relative;
          width: 260px;
          height: 260px;
          border-radius: 9999px;
          object-fit: cover;
          z-index: 1;
        }

        .vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.5) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .download-btn-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 12px;
          padding: 8px;
          background: transparent;
          z-index: 0;
        }

        .download-btn-wrapper::before {
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

        .download-btn {
          position: relative;
          border-radius: 10px;
          background: black;
          color: white;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 1;
          text-decoration: none;
          user-select: none;
          transition: background-color 0.3s ease;
        }

        .download-btn:hover {
          background-color: #1a1a1a;
        }

        @keyframes spin {
          to {
            --a: 360deg;
          }
        }
      `}</style>

      <section className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-gray-400 tracking-wide text-sm uppercase font-mono">Software Developer</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight md:leading-[1.2]">
            Hello I’m <br />
            <span className="text-purple-600">Talari Srinivas</span>
          </h1>

          <p className="text-gray-400 font-mono leading-relaxed max-w-md text-sm">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>

          {/* CTA & Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-4">
            <div className="download-btn-wrapper">
              <a
                href="/resume.pdf"
                download
                className="download-btn"
              >
                Download Resume <HiDownload className="text-lg" />
              </a>
            </div>

            <div className="flex gap-5 text-purple-600 text-xl">
              <a href="https://github.com/TalariSrinivas" className="hover:text-purple-500 transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/talari-srinivas/" className="hover:text-purple-500 transition"><FaLinkedin /></a>
              
              
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 text-center sm:text-left">
            <div>
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-gray-400 text-sm mt-1">Years of<br />experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">26</h2>
              <p className="text-gray-400 text-sm mt-1">Projects<br />completed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">8</h2>
              <p className="text-gray-400 text-sm mt-1">Technologies<br />mastered</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">500</h2>
              <p className="text-gray-400 text-sm mt-1">Code<br />commits</p>
            </div>
          </div>
        </div>

        {/* Right - Image with Circular Border and Vignette */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="border-wrapper">
            <img
              src="/s4.png"
              alt="Luke Coleman"
              className="profile-image"
            />
            <div className="vignette" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
