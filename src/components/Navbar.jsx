import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-4 bg-black shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg ">
            <Link to="/" className="text-xl lg:text-3xl ">Mayur Ghule</Link>

          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-xl effect"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 text-xl effect"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-white hover:text-gray-300 text-xl effect"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-gray-300 text-xl effect"
            >
              Projects
            </Link>
            <Link to='/Mayur-Ghule-Resume.pdf'
              target='_blank' className="text-white hover:text-gray-300 text-xl effect"
            >
              Resume
            </Link>

          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>

        </div>

        {/* For Mobile */}
        {isOpen && (
          <div className={`w-full h-auto mt-1  md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="block text-white hover:bg-zinc-600 p-2 rounded-md hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-white hover:bg-zinc-600 p-2 rounded-md hover:underline" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/skills" className="block text-white hover:bg-zinc-600 p-2 rounded-md hover:underline" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/projects" className="block text-white hover:bg-zinc-600 p-2 rounded-md hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to='/Mayur-Ghule-Resume.pdf'
              target='_blank' className="block text-white hover:bg-zinc-600 p-2 rounded-md hover:underline" onClick={() => setIsOpen(false)}>Resume</Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
