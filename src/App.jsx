import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './components/Login';
import C from './components/C'
import Cpp from './components/Cpp'
import Python from './components/Python'
import Java from './components/Java'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Problem from './components/Problem';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Contest from './components/Contest';
import ProblemsList from './components/ProblemsList';
import ProblemsPage from './components/ProblemsPage';
import Profile from './components/Profile'; // ✅ NEW
import Leaderboard from './components/Leaderboard';
import AddContestQuestion from './components/AddContestQuestion';


// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
  {
    path: '/leaderboard',
    element: (
      <>
        <Navbar />
        <Leaderboard />
      </>
    ),
  },
  {
    path: '/addContestQuestions',
    element: (
      <>
        <Navbar />
        <AddContestQuestion />
      </>
    ),
  },
  {
    path: '/problemList',
    element: (
      <>
        <Navbar />
        <ProblemsList />
      </>
    ),
  },
  {
    path: '/contest',
    element: (
      <>
        <Navbar />
        <Contest />
      </>
    ),
  },
  {
    path: '/c',
    element: (
      <>
        <Navbar />
        <C />
      </>
    ),
  },
  {
    path: '/java',
    element: (
      <>
        <Navbar />
        <Java />
      </>
    ),
  },
  {
    path: '/cpp',
    element: (
      <>
        <Navbar />
        <Cpp />
      </>
    ),
  },
  {
    path: '/python',
    element: (
      <>
        <Navbar />
        <Python />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  
  
  {
    path: '/services',
    element: (
      <>
        <Navbar />
        <Services />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
    <>
      <Navbar />
      <Dashboard />
    </>
    ),
  },
  {
    path: '/problems/:id',
    element: (
      <>
        <Navbar />
        <ProblemsPage />
      </>
    ),
  },
  {
    path: '/profile', // ✅ NEW
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
  },
]);

// Main App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
