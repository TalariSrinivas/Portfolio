import React, { useState } from 'react';
import { FiBriefcase, FiBook, FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'experience', label: 'Experience', icon: <FiBriefcase size={18} /> },
  { id: 'education', label: 'Education', icon: <FiBook size={18} /> },
  { id: 'aboutme', label: 'About me', icon: <FiUser size={18} /> },
];

const About = () => {
  const [hovered, setHovered] = useState('aboutme');

  const fadeVariant = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  };

  return (
    <>
      <style>{`
        .sidebar-button {
          width: 100%;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: color 0.3s, background-color 0.3s, border 0.3s, box-shadow 0.3s;
          background-color: #1c1c1c;
          color: white;
          border: 2px solid transparent;
          cursor: pointer;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          display: flex;
          align-items: center;
          height: 44px;
          font-size: 1rem;
          line-height: 1.5rem;
          user-select: none;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .sidebar-button:hover {
          background-color: #2a2a2a;
        }
        .sidebar-button.active {
          background-color: transparent;
          color: #14b8a6;
          border-image: conic-gradient(
            from 0deg,
            #f72585,
            #7209b7,
            #3a0ca3,
            #4361ee,
            #4cc9f0,
            #f72585
          ) 1;
          border-style: solid;
          border-width: 2px;
          font-weight: 700;
          box-shadow: 0 0 8px #14b8a699;
        }
      `}</style>

      <section className="flex flex-col md:flex-row bg-[#0d1117] text-white mb-10 shadow-xl px-4 md:px-20 pt-32 pb-20 gap-6 max-w-screen-2xl mx-auto font-mono">

        {/* Sidebar */}
        <div className="md:w-1/4 min-w-[220px] flex flex-col space-y-6">
          <motion.h2
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why hire me?
          </motion.h2>

          <motion.p
            className="text-gray-400 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Passionate about building elegant digital solutions with cutting-edge tech stacks.
          </motion.p>

          {/* Mobile Scroll */}
          <div className="flex md:hidden overflow-x-auto space-x-3 mt-4 pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onMouseEnter={() => setHovered(section.id)}
                className={`sidebar-button whitespace-nowrap ${hovered === section.id ? 'active' : ''}`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>

          {/* Desktop List */}
          <div className="hidden md:flex flex-col space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onMouseEnter={() => setHovered(section.id)}
                className={`sidebar-button ${hovered === section.id ? 'active' : ''}`}
              >
                {section.icon}
                <span className="pl-1">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content with Animation */}
        <div className="w-full md:w-3/4 space-y-12">
          <AnimatePresence mode="wait">
            {hovered === 'aboutme' && (
              <motion.div
                key="aboutme"
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-[#161b22] border border-gray-800 rounded-xl p-6 shadow-lg shadow-blue-500/30 backdrop-blur-sm"
              >
                <h2 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  # About Me
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello, I'm <span className="text-white font-semibold">Talar Srinivas</span>, a passionate Web developer with a keen eye for the MERN Stack.
                  With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
                </p>
              </motion.div>
            )}

            {hovered === 'education' && (
              <motion.div
                key="education"
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-[#161b22] border border-gray-800 rounded-xl p-6 shadow-lg shadow-blue-500/30 backdrop-blur-sm"
              >
                <h2 className="text-3xl font-semibold mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  # Education
                </h2>
                <p className="text-gray-300 text-lg">
                  <strong className="text-purple-400">B.Tech, Computer Science and Engineering</strong><br />
                  3rd Year, RGUKT-Basar<br />
                  Expected Graduation: <span className="text-white font-medium">2026</span>
                </p>
              </motion.div>
            )}

            {hovered === 'experience' && (
              <motion.div
                key="experience"
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-[#161b22] border border-gray-800 rounded-xl p-6 shadow-lg shadow-blue-500/30 backdrop-blur-sm"
              >
                <h2 className="text-3xl font-semibold mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  # Professional Experience
                </h2>

                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>
                    Designed and developed a quest-based 3D Unity game for our university TechFest <strong className="text-purple-400">Antahpragnya</strong>.<br />
                    Won <strong className="text-green-400">1st Prize</strong> for creativity and execution.
                  </li>
                  <li>
                    Currently working as a <strong className="text-blue-400">Frontend Intern</strong> at <strong className="text-yellow-400">Zoro Innovations</strong>.
                  </li>
                  <li>
                    Working as a <strong className="text-blue-400">Full Stack Intern</strong> at <strong className="text-green-300">ApexPlanet</strong>.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <img src="/projects/exp2.jpg" alt="Game Screenshot 1" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
                  <img src="/projects/exp1.jpg" alt="Game Screenshot 2" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
                  <img src="/projects/exp.jpg" alt="Game Screenshot 3" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default About;
