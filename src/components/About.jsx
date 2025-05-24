import React, { useState } from 'react';
import { FiBriefcase, FiBook, FiStar, FiUser } from 'react-icons/fi';

const sections = [
  { id: 'experience', label: 'Experience', icon: <FiBriefcase size={18} /> },
  { id: 'education', label: 'Education', icon: <FiBook size={18} /> },
  { id: 'skills', label: 'Skills', icon: <FiStar size={18} /> },
  { id: 'aboutme', label: 'About me', icon: <FiUser size={18} /> },
];

const About = () => {
  const [active, setActive] = useState('aboutme');

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
          color: #a855f7;
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
          box-shadow: 0 0 8px #a855f7aa;
        }

        .about-border {
          border-radius: 1rem;
          border: 2px solid transparent;
          background: linear-gradient(black, black) padding-box,
            conic-gradient(
              from 0deg,
              #f72585,
              #7209b7,
              #3a0ca3,
              #4361ee,
              #4cc9f0,
              #f72585
            ) border-box;
        }
      `}</style>

      <section className="flex flex-col md:flex-row bg-[#0f0f0f] text-white min-h-screen px-4 sm:px-8 md:px-16 pb-16 pt-16 gap-6">

        {/* Sidebar */}
        <div className="md:w-1/4 min-w-[220px] flex flex-col space-y-6 font-mono">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">Why hire me?</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Passionate about building elegant digital solutions with cutting-edge tech stacks.
          </p>

          {/* Mobile Sidebar */}
          <div className="flex md:hidden overflow-x-auto space-x-3 mt-4 pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`sidebar-button whitespace-nowrap ${active === section.id ? 'active' : ''}`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:flex flex-col space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`sidebar-button ${active === section.id ? 'active' : ''}`}
              >
                {section.icon}
                <span className="pl-1">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-12">
          {active === 'aboutme' && (
            <div className="about-border p-6 rounded-xl">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-500">About Me</h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Hello, I'm <span className="text-white font-semibold">Talar Srinivas</span>, a passionate Web developer with a keen eye for the MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
              </p>
            </div>
          )}

          {active === 'education' && (
            <div className="about-border p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Education</h2>
              <p className="text-gray-300">
                <strong>B.Tech, Computer Science and Engineering</strong><br />
                3rd Year, RGUKT-Basar<br />
                Expected Graduation: <span className="text-white font-medium">2026</span>
              </p>
            </div>
          )}

          {active === 'skills' && (
            <div className="about-border p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-purple-400 mb-6">Skills & Expertise</h2>
              {(() => {
                const skillImages = {
                  JavaScript: '/images/javascript.png',
                  Python: '/images/python.png',
                  C: '/images/c.png',
                  'C++': '/images/cpp.png',
                  Java: '/images/java.png',
                  PHP: '/images/php.png',
                  MySQL: '/images/mysql.png',
                  MongoDB: '/images/mongodb.png',
                  PostgreSQL: '/images/postgresql.png',
                  Git: '/images/git.png',
                  GitHub: '/images/github.png',
                  'Unity Game Engine': '/images/unity.png',
                  Blender: '/images/blender.png',
                  'VS Code': '/images/vscode.png',
                  Docker: '/images/docker.png',
                  'React.js': '/images/react.png',
                  'Express.js': '/images/express.png',
                  'Node.js': '/images/node.png',
                  TailwindCSS: '/images/tailwindcss.png',
                  pandas: '/images/pandas.png',
                  NumPy: '/images/numpy.png',
                  Matplotlib: '/images/matplotlib.png',
                };

                const renderSkillList = (skills) => (
                  <ul className="flex flex-wrap gap-3 text-gray-300 text-sm">
                    {skills.map(skill => (
                      <li key={skill} className="bg-[#1c1c1c] px-4 py-2 rounded flex items-center gap-2">
                        <img src={skillImages[skill]} alt={skill} className="w-5 h-5 object-contain" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <>
                    <div className="mb-4">
                      <h3 className="text-purple-300 font-semibold mb-2">Languages:</h3>
                      {renderSkillList(['JavaScript', 'Python', 'C', 'C++', 'Java', 'PHP'])}
                    </div>
                    <div className="mb-4">
                      <h3 className="text-purple-300 font-semibold mb-2">Database:</h3>
                      {renderSkillList(['MySQL', 'MongoDB', 'PostgreSQL'])}
                    </div>
                    <div className="mb-4">
                      <h3 className="text-purple-300 font-semibold mb-2">Tools:</h3>
                      {renderSkillList(['Git', 'GitHub', 'Unity Game Engine', 'Blender', 'VS Code', 'Docker'])}
                    </div>
                    <div>
                      <h3 className="text-purple-300 font-semibold mb-2">Libraries/Frameworks:</h3>
                      {renderSkillList(['React.js', 'Express.js', 'Node.js', 'TailwindCSS', 'pandas', 'NumPy', 'Matplotlib'])}
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {active === 'experience' && (
            <div className="about-border p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">Professional Experience</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>
                  Designed and developed a quest-based 3D Unity game for our university TechFest <strong>Antahpragnya</strong>.<br />
                  Featuring interactive missions, puzzles, and an engaging storyline set in a virtual version of my University.<br />
                  Won <strong>1st Prize</strong> from the <strong>CSE branch</strong> for creativity, technical execution, and overall user experience.
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <img src="/exp2.jpg" alt="Game Screenshot 1" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
                <img src="/exp1.jpg" alt="Game Screenshot 2" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
                <img src="/exp.jpg" alt="Game Screenshot 3" className="w-full sm:w-60 h-36 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
