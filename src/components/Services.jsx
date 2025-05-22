import React from 'react';

const projects = [
  {
    title: 'Rgukt-Game',
    description: 'Virtual Rgukt University Game Using Unity, Where we can experience the virual world of Our University',
    image: 'game.jpeg',
    siteLink: 'https://rgukt-game.netlify.app/',
    sourceCode: 'https://github.com/anilgummula/rgukt_game',
    status: 'complete',
  },
  {
    title: 'Chatbot BotGPT',
    description: 'A chatbot app in which you can ask whatever queries want to ask to our chatbot',
    image: '/images/chatbot.png',
    siteLink: '#',
    sourceCode: '#',
    status: 'complete',
  },
  {
    title: 'Job Search',
    description: 'A JobSearch Platform, Where you can apply for a particular job post and get hired! based on skillset',
    image: '/images/jobsearch.png',
    siteLink: '#',
    sourceCode: '#',
    status: 'processing',
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
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

        /* Scoped button styles to avoid conflicts with Navbar */
        .project-hire-btn-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 10px;
          padding: 2px;
          background: transparent;
          z-index: 0;
        }

        .project-hire-btn-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 10px;
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

        .project-hire-btn {
          position: relative;
          border-radius: 10px;
          background: black;
          color: white;
          padding: 0.5rem 1.25rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          z-index: 1;
          transition: background-color 0.3s ease;
        }

        .project-hire-btn:hover {
          background-color: #1a1a1a;
        }

        .project-hire-btn.processing {
          color: #f72585;
          opacity: 0.9;
          pointer-events: none;
          cursor: default;
        }

        @keyframes spin {
          to {
            --a: 360deg;
          }
        }
      `}</style>

      <section className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-16 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="about-border p-6 rounded-xl text-center shadow-lg">
              <img src={project.image} alt={project.title} className="w-24 h-24 mx-auto mb-4 rounded-xl object-cover" />
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {project.status === 'processing' ? (
                <div className="project-hire-btn-wrapper mt-2">
                  <div className="project-hire-btn processing">
                    Under Processing... 😊
                  </div>
                </div>
              ) : (
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  <div className="project-hire-btn-wrapper">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-hire-btn"
                    >
                      SITE LINK
                    </a>
                  </div>

                  <div className="project-hire-btn-wrapper">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-hire-btn"
                    >
                      Source code
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
