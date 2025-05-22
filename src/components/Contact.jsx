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
    <section className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-16 py-16 flex items-center justify-center">
      <div
        className="rounded-xl p-6 max-w-5xl text-white"
        style={{
          border: "2px solid transparent",
          borderRadius: "1rem",
          background:
            "linear-gradient(black, black) padding-box, conic-gradient(from 0deg, #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0, #f72585) border-box",
        }}
      >
        {/* Inner container with solid background */}
        <div className="bg-black rounded-lg p-8 shadow-lg shadow-purple-700/30">
          <header className="text-left space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
              Talari Srinivas
            </h1>

            <p className="flex items-center gap-2 text-gray-400">
              
              Ranga Reddy, Telangana
            </p>

            <p className="flex items-center gap-2">
              
              <a
                href="mailto:talarisrinivas201067@gmail.com"
                className="text-purple-400 underline"
              >
                talarisrinivas201067@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2 text-gray-400">
              
              Phone: (+91) 9959806102
            </p>

            <p className="flex items-center gap-2">
              
              <a
                href="https://www.linkedin.com/in/talari-srinivas/"
                className="text-purple-400 underline"
              >
                LinkedIn
              </a>
            </p>
          </header>

          <section className="mt-12">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiClipboard />
              Objective
            </h2>
            <p className="text-gray-300 mt-2">
              Software Engineer with problem-solving skills, and Fullstack
              webdev proficiency. Experienced in JS, C, C++, Java and MERN stack
              in web development. Eager to contribute, learn, and grow as a
              developer through an internship.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiBook />
              Education
            </h2>
            <div className="mt-2 text-gray-300">
              <p>
                <strong>Rajiv Gandhi University of Knowledge Technologies</strong>
              </p>
              <p>Bachelor of Technology in Computer Science Engineering</p>
              <p>
                CGPA: <span className="text-purple-400 font-semibold">8.4</span>
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiTool />
              Projects
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4 mt-2">
              <li>
                <strong className="text-purple-400">
                  Rgukt University Virtual Game
                </strong>
                <br />
                Developed a 3D game using Unity and C#. Created gameplay mechanics
                like quests, UI, and interactions. Modeled a real-world university
                campus.
              </li>
              <li>
                <strong className="text-purple-400">Farmer-Retailer Interaction Platform</strong>
                <br />
                Built a dynamic MERN app connecting farmers with retailers. Used
                location-based suggestions. Focused on backend and scalable
                development.
              </li>
              <li>
                <strong className="text-purple-400">Code Master</strong>
                <br />
                Full-stack HackerRank clone with real-time code editor, contests,
                and tutorials. Built using React, TailwindCSS, Node, and MongoDB
                with light/dark themes.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiStar />
              Technical Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-gray-300 mt-2">
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

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiBriefcase />
              Experience
            </h2>
            <div className="mt-2 text-gray-300">
              <p>
                <strong>
                  Game Developer - 3D Virtual Unity Game | ITechFest Antahpragnya-2025
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

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-purple-500 border-b border-purple-700 pb-2">
              <FiCheckCircle />
              Accomplishments
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>
                Active problem solver on GeeksforGeeks and LeetCode focusing on data
                structures and algorithms.
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
