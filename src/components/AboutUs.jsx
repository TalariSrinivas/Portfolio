import React from 'react';
import { Users, Code, Rocket, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-12">
          We are a passionate team building a platform to help you master coding, one problem at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              We're a group of developers, educators, and dreamers who believe everyone should have access to high-quality coding education.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make coding fun, accessible, and effective through interactive problems, real-time feedback, and a vibrant community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Why We Started</h3>
            <p className="text-gray-600">
              We saw the struggle students face when learning to code and wanted to create something better—more intuitive, more personal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Community, growth, curiosity, and inclusivity. We build for learners of every background and skill level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
