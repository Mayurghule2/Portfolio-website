import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import { useLocation } from 'react-router-dom';
import './styles/styles.css';
import Loader from './components/Loader'
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])
  

  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Effect to update the previous path on location change
  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
    
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Contact /> */}
       
        {
          loading ?   <div className='w-full h-screen flex items-center justify-center'>
          <Loader className='' />
        </div> :
        <div
         className="app flex flex-col h-screen"
         >
      <Navbar />

      <div
        className={`page-container ${prevPath === location.pathname ? 'no-transition' : ''}`}
        key={location.pathname}
      >
        {/* Render content based on the route */}
        {location.pathname === '/' && <Home />}
        {location.pathname === '/about' && <About />}
        {location.pathname === '/skills' && <Skills />}
        {location.pathname === '/projects' && <Projects />}
        {location.pathname === '/resume' && <Resume />}
      </div>
    </div>
      
        }


    
    </>
  )
}

export default App
