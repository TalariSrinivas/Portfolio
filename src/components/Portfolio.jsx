import React from 'react';
import { motion } from 'framer-motion';
import GameLogo from '/projects/game.jpeg';
import CodeLogo from '/github.png';
import JobLogo from '/github.png';

const projectList = [
  {
    id: 0,
    logo: GameLogo,
    name: 'Rgukt-Game',
    description:
      'Virtual RGUKT University Game using Unity, where we can experience the virtual world of our University.',
    url: 'https://rgukt-game.netlify.app/',
    repo: 'https://github.com/anilgummula/rgukt_game',
    complete: true,
  },
  {
    id: 1,
    logo: CodeLogo,
    name: 'Code Masters',
    description:
      'CodeMaster is an interactive coding platform designed for practicing problems and competing.',
    url: 'https://codemasters10.netlify.app/',
    repo: 'https://github.com/TalariSrinivas/CodeMaster.git',
    complete: true,
  },
  {
    id: 2,
    logo: JobLogo,
    name: 'Job Search',
    description:
      'A job search platform where you can apply for job posts and get hired based on skillset.',
    url: '#',
    repo: '#',
    complete: false,
  },
];

function Portfolio() {
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-[#0d1117] text-white font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-semibold mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 tracking-wide">
          &lt;Projects /&gt;
        </h1>
        <p className="text-gray-400 mb-10 text-lg font-medium underline">Featured Projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectList.map(({ id, logo, name, description, url, repo, complete }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            className="bg-[#161b22] p-6 shadow-lg shadow-blue-500/20 rounded-2xl transform transition-transform hover:scale-[1.02]"
          >
            <img
              src={logo}
              alt={name}
              className="w-[100px] h-[100px] rounded-full border-2 border-teal-500 mx-auto mb-4 object-cover shadow-md"
            />
            <h2 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              {name}
            </h2>
            <p className="text-center text-gray-400 mt-3 text-sm leading-relaxed">
              {description}
            </p>

            {!complete && (
              <div className="mt-4 text-yellow-400 text-center font-semibold">
                🚧 Under Processing...
              </div>
            )}

            {complete && (
              <div className="flex justify-center gap-4 mt-6">
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-md text-white text-sm font-semibold transition-all duration-200 shadow-md"
                >
                  Site Link
                </motion.a>
                <motion.a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-md text-white text-sm font-semibold transition-all duration-200 shadow-md"
                >
                  Source Code
                </motion.a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
