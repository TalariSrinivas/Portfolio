import React from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiBriefcase,
  FiBook,
  FiClipboard,
  FiTool,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const Resume = () => {
  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen px-4 sm:px-6 md:px-16 py-16 flex items-center justify-center">
      <div
        className="rounded-xl p-4 sm:p-6 max-w-5xl w-full text-white"
        style={{
          border: "2px solid transparent",
          borderRadius: "1rem",
          background:
            "linear-gradient(black, black) padding-box, conic-gradient(from 0deg, #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #f72585) border-box",
        }}
      >
        <div className="bg-black rounded-lg p-6 sm:p-8 shadow-lg shadow-purple-700/30">
          {/* Header */}
          <header className="space-y-3 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600">
              Talari Srinivas
            </h1>

            <div className="space-y-1 text-sm sm:text-base">
              <p className="flex items-center gap-2 text-gray-400">
                <FiMapPin /> Ranga Reddy, Telangana
              </p>

              <p className="flex items-center gap-2">
                <FiMail />
                <a
                  href="mailto:talarisrinivas201067@gmail.com"
                  className="text-purple-400 underline break-words"
                >
                  talarisrinivas201067@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2 text-gray-400">
                <FiPhone /> (+91) 9959806102
              </p>

              <p className="flex items-center gap-2">
                <FiLinkedin />
                <a
                  href="https://www.linkedin.com/in/talari-srinivas/"
                  className="text-purple-400 underline break-words"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </header>

          {/* Objective */}
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiClipboard /> Objective
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Software Engineer with problem-solving skills, and Fullstack
              webdev proficiency. Experienced in JS, C, C++, Java and MERN stack
              in web development. Eager to contribute, learn, and grow as a
              developer through an internship.
            </p>
          </section>

          {/* Education */}
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiBook /> Education
            </h2>
            <div className="mt-2 text-gray-300 text-sm sm:text-base">
              <p>
                <strong>Rajiv Gandhi University of Knowledge Technologies</strong>
              </p>
              <p>Bachelor of Technology in Computer Science Engineering</p>
              <p>
                CGPA:{" "}
                <span className="text-purple-400 font-semibold">8.4</span>
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiTool /> Projects
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4 mt-2 text-sm sm:text-base">
              <li>
                <strong className="text-purple-400">
                  Rgukt University Virtual Game
                </strong>
                <br />
                Developed a 3D game using Unity and C#. Created gameplay
                mechanics like quests, UI, and interactions. Modeled a real-world
                university campus.
              </li>
              <li>
                <strong className="text-purple-400">
                  Farmer-Retailer Interaction Platform
                </strong>
                <br />
                Built a dynamic MERN app connecting farmers with retailers. Used
                location-based suggestions. Focused on backend and scalable
                development.
              </li>
              <li>
                <strong className="text-purple-400">Code Master</strong>
                <br />
                Full-stack HackerRank clone with real-time code editor, contests,
                and tutorials. Built using React, TailwindCSS, Node, and MongoDB.
              </li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiStar /> Technical Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mt-2 text-sm sm:text-base">
              <p>
                <strong>Languages:</strong> JavaScript, Python, C, C++, Java, PHP
              </p>
              <p>
                <strong>Database:</strong> MySQL, MongoDB, PostgreSQL
              </p>
              <p>
                <strong>Tools:</strong> Git, GitHub, Unity, Blender, VS Code,
                Docker
              </p>
              <p>
                <strong>Frameworks:</strong> React.js, Express.js, Node.js,
                TailwindCSS, pandas, NumPy, Matplotlib
              </p>
              <p>
                <strong>Soft Skills:</strong> Communication, Problem Solving,
                Leadership, Time Management, Adaptability
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiBriefcase /> Experience
            </h2>
            <div className="mt-2 text-gray-300 text-sm sm:text-base">
              <p>
                <strong>
                  Game Developer - 3D Virtual Unity Game | ITechFest
                  Antahpragnya-2025
                </strong>
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Designed and developed a quest-based 3D Unity game.</li>
                <li>
                  Integrated missions, puzzles, and a storyline based on the
                  university campus.
                </li>
                <li>Won 1st Prize for creativity and execution.</li>
              </ul>
            </div>
          </section>

          {/* Accomplishments */}
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiCheckCircle /> Accomplishments
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 text-sm sm:text-base">
              <li>
                Active problem solver on GeeksforGeeks and LeetCode focusing on
                data structures and algorithms.
              </li>
              <li>
                Proficient in Game Development using Unity and 3D modeling with
                Blender.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
