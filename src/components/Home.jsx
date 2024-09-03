import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';
import MyImage from '../images/my-photo.png'
import BackgroundImage from '../images/black-3.png'
function Home() {

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Mayur-Ghule-Resume.pdf'
    link.download = 'Mayur-Ghule-Resume.pdf'
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  }

  return (
    <div
      className='w-full min-h-screen  bg-cover bg-center bg-no-repeat ' 
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 lg:py-28 text-center">
        <div className="lg:w-1/2 pr-[50px] flex md:justify-end">
          <div className="relative shadow-white">
            <img
              src={MyImage}
              alt="Profile"
              className="object-cover shadow-white w-60 lg:w-80 h-60 lg:h-80 rounded-full md:h-80 md:w-80 ml-10 lg:mr-20"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex lg:justify-start pl-0 lg:pl-10 ">
          <div className="mt-0">
            <h2 className="text-lg lg:text-xl text-gray-400 mb-6">Hello, I'm</h2>
            <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-[#fd2d00] via-[#ff4545] to-[#df007c] inline-block text-transparent bg-clip-text my-name">Mayur Ghule</h1>
            <div className="text-2xl lg:text-4xl text-gray-400 mt-2 font-semibold font-mono">

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I am  Web Developer',
                  500, // wait 1s before replacing "Mice" with "Hamsters"
                  'I am C++ Programmer',
                  500,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                className="text-xl bg-gradient-to-r text-black bg-white   hover:text-white font-semibold py-4 px-8 rounded-full shadow-sm hover:from-pink-600 hover:to-orange-600 hover:shadow-white transition duration-300"
                onClick={handleDownload}
              >
                Download CV
              </button>

            </div>
            <div className="mt-4 flex justify-center space-x-6">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;