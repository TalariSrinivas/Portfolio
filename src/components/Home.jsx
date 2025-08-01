import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiAngular, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Download } from "lucide-react";
import pic from '/srinivas.jpeg';

function Home() {
  return (
    <>
      <style>{`
        .tooltip-container {
          position: relative;
          display: inline-block;
        }
        .tooltip-text {
          visibility: hidden;
          width: max-content;
          background-color: #1f2937;
          color: #f1f5f9;
          text-align: center;
          border-radius: 0.5rem;
          padding: 0.25rem 0.5rem;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 0.75rem;
          white-space: nowrap;
        }
        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      <div name="Home" className="home max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-[#0d1117] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Section */}
          <motion.div 
            className="md:w-1/2 mt-10 space-y-4 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-xl text-teal-400">Welcome To My World</span>

            <div className="flex flex-wrap text-2xl md:text-3xl font-semibold">
              <h1 className="mr-2">Hi, I'm a</h1>
              <ReactTyped
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold"
                strings={["Full Stack Developer", "Programmer", "Coder!"]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-sm md:text-md text-gray-300 text-justify leading-relaxed">
              Hello, I'm <strong className="text-white">Talar Srinivas</strong>, a passionate Software Engineer and MERN Stack Developer with strong problem-solving skills and a solid background in C, C++, Java, and JavaScript. 
              <br />
              <span className="font-semibold">In simple words, <span className="text-purple-400">I am a Developer 😊</span></span>
            </p>

            {/* Social Media & Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6">
              
              {/* Social Media */}
              <div>
                <h1 className="font-bold text-lg mb-2">Connect with me</h1>
                <div className="flex space-x-5 text-2xl text-white">
                  <motion.div 
                    className="tooltip-container"
                    whileHover={{ scale: 1.2 }}
                  >
                    <a href="https://www.linkedin.com/in/talari-srinivas/" target='_blank' rel='noopener noreferrer'>
                      <FaLinkedin className="hover:text-blue-400 transition-all duration-200" />
                    </a>
                    <span className="tooltip-text">LinkedIn</span>
                  </motion.div>
                  <motion.div 
                    className="tooltip-container"
                    whileHover={{ scale: 1.2 }}
                  >
                    <a href="https://github.com/TalariSrinivas" target='_blank' rel='noopener noreferrer'>
                      <FaGithub className="hover:text-gray-300 transition-all duration-200" />
                    </a>
                    <span className="tooltip-text">GitHub</span>
                  </motion.div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h1 className="font-bold text-lg mb-2">Tech Stack</h1>
                <div className="flex space-x-4 text-3xl">
                  {[ 
                    { Icon: SiMongodb, color: "text-green-500", label: "MongoDB" },
                    { Icon: SiExpress, color: "text-gray-400", label: "Express.js" },
                    { Icon: FaReact, color: "text-cyan-400", label: "React.js" },
                    { Icon: FaNodeJs, color: "text-green-300", label: "Node.js" },
                    { Icon: SiTypescript, color: "text-blue-500", label: "TypeScript" },
                    { Icon: SiNextdotjs, color: "dark:text-white text-black", label: "Next.js" },
                    { Icon: SiAngular, color: "text-red-600", label: "Angular" },
                  ].map(({ Icon, color, label }, idx) => (
                    <motion.div 
                      key={idx}
                      className="tooltip-container"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className={`transition-transform ${color}`} />
                      <span className="tooltip-text">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <motion.div 
              className="pt-8"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end order-1"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <img
              src={pic}
              alt="profile"
              className="rounded-full shadow-teal-500 shadow-lg w-64 h-64 md:w-[450px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
