import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiC,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiAngular,
  SiVisualstudiocode,
} from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Experience() {
  const skills = {
    Languages: [
      { id: 1, icon: <FaJava className="text-red-500" />, name: 'Java' },
      { id: 2, icon: <DiJavascript1 className="text-yellow-300" />, name: 'JavaScript' },
      { id: 3, icon: <SiCplusplus className="text-indigo-400" />, name: 'C++' },
      { id: 4, icon: <SiC className="text-blue-200" />, name: 'C' },
      { id: 5, icon: <FaPython className="text-blue-400" />, name: 'Python' },
    ],
    'Libraries & Frameworks': [
      { id: 6, icon: <FaReact className="text-cyan-400" />, name: 'React.js' },
      { id: 7, icon: <SiExpress className="text-gray-300" />, name: 'Express.js' },
      { id: 8, icon: <FaNodeJs className="text-green-400" />, name: 'Node.js' },
      { id: 9, icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      { id: 10, icon: <SiNextdotjs className="text-gray-300" />, name: 'Next.js' },
      { id: 11, icon: <SiRedux className="text-purple-500" />, name: 'Redux' },
      { id: 12, icon: <SiAngular className="text-red-600" />, name: 'Angular' },
      { id: 13, icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS' },
    ],
    Databases: [
      { id: 14, icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
      { id: 15, icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
      { id: 16, icon: <SiPostgresql className="text-sky-500" />, name: 'PostgreSQL' },
    ],
    Tools: [
      { id: 17, icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
      { id: 18, icon: <FaGithub className="text-gray-300" />, name: 'GitHub' },
      { id: 19, icon: <FaDocker className="text-blue-500" />, name: 'Docker' },
      { id: 20, icon: <SiVisualstudiocode className="text-blue-400" />, name: 'VS Code' },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-[#0d1117] text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-semibold mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 tracking-wide">
          &lt;Experience /&gt;
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Technologies I've worked with</p>
      </motion.div>

      {Object.entries(skills).map(([category, items], i) => (
        <motion.div
          key={category}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            # {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {items.map(({ id, icon, name }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center bg-[#161b22] border border-gray-800 p-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-transform duration-300"
              >
                <div className="text-5xl">{icon}</div>
                <p className="mt-4 text-teal-300 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;
