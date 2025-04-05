import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Problem from './components/Problem';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import ProblemsList from './components/ProblemsList';
import ProblemsPage from './components/ProblemsPage';
;

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
      <Navbar/>
      <Home/>
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
    path: '/problemList',
    element: (
      <>
        <Navbar />
        <ProblemsList />
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
    )
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
    path: '/Signup',
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path:'/Dashboard',
    element:<Dashboard/>
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
]);

// Main App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
