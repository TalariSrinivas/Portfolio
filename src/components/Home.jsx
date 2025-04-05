import React from 'react';
import { Code, BookOpen, Trophy } from 'lucide-react'; // install lucide-react if needed

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Welcome to CodeMaster 🚀
        </h1>
        <p className="text-gray-700 text-lg">
          Level up your coding skills with interactive challenges, tutorials, and contests.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Practice */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <div className="bg-blue-100 w-fit p-3 rounded-full mb-4">
            <Code className="text-blue-600" size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Practice Problems</h2>
          <p className="text-gray-600">
            Solve thousands of problems in data structures, algorithms, and more.
          </p>
        </div>

        {/* Tutorials */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <div className="bg-green-100 w-fit p-3 rounded-full mb-4">
            <BookOpen className="text-green-600" size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Interactive Tutorials</h2>
          <p className="text-gray-600">
            Learn coding step-by-step with beginner-friendly tutorials.
          </p>
        </div>

        {/* Contests */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <div className="bg-yellow-100 w-fit p-3 rounded-full mb-4">
            <Trophy className="text-yellow-600" size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Compete & Win</h2>
          <p className="text-gray-600">
            Join coding competitions, improve your rank, and earn cool rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
