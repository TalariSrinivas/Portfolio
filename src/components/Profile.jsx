import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Star, UserCircle2 } from 'lucide-react';
import { useUser } from '../context';
import axios from 'axios';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // This holds the user's email
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      // Fetch user data from backend
      axios
        .get(`http://localhost:5000/api/users/${user}`)
        .then((res) => setUserData(res.data))
        .catch((err) => {
          console.error('Error fetching user data:', err);
        });
    }
  }, [user, navigate]);

  if (!userData) return null; // Loading state

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <img
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
              src={userData.image || '/pic.png'}
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full">
              <UserCircle2 className="text-white" size={20} />
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{userData.username}</h2>

          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Mail size={18} />
            <span>{userData.email}</span>
          </div>

          <div className="flex items-center space-x-2 text-yellow-500 text-lg font-medium">
            <Star />
            <span>{userData.score || 0} Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
