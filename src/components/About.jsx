import React from 'react'
import BackgroundImage from '../images/black-3.png'
function About() {
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: `url(${BackgroundImage})` }}
     >
    <div className="max-w-5xl mx-auto py-8 lg:py-10 px-3 h-auto">
      {/* Introduction Section */}
      <div className="">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-100 mb-4 heading border-b-2 pb-2 flex justify-center">About Me</h2>
        <p className="text-lg lg:text-xl py-3 lg:py-6 px-3 justify-evenly text-gray-300">
        Hello, I am Mayur Ghule , I’m a passionate and motivated web developer .I’m eager to apply my skills in a dynamic environment, solve real-world problems, and contribute to innovative projects. I thrive on learning new technologies and collaborating with teams to achieve common goals.
        </p>
      </div>

      {/* Education Section */}
      <div className=''>
        <h3 className="text-2xl lg:text-3xl text-white font-bold heading mb-6 border-b-2 flex justify-center">Education</h3>
        <div className="space-y-6 ml-2 lg:ml-0 mr-2 lg:mr-0">
          <div className=" shadow-2xl rounded-lg p-3 lg:p-6 bg-gradient-to-r from-black ... hover:bg-slate-900">
            <h4 className="text-xl lg:text-2xl font-semibold text-white">Bachelor of Technology in Computer Science</h4>
            <p className="text-white text:md lg:text-lg mt-2">Government College Of Engineering Amravati, 2021 - 2025</p>
            <p className="text-white text:md lg:text-lg">CGPA - 8.27 ( Until 6<sup>th</sup> Semester )</p>
          </div>
          <div className=" shadow-md rounded-lg p-3 lg:p-6 bg-gradient-to-r from-black ... hover:bg-slate-900">
            <h4 className="text-xl lg:text-2xl font-semibold text-white">High School Education</h4>
            <p className="text-white text:md lg:text-lg mt-2">Shri Shivaji Multi Purpose Higher Secondary School and Junior College Amravati, 2018 - 2020</p>
            <p className="text-white text:md lg:text-lg">Specialized in General Science Stream</p>
            <p className="text-white text:md lg:text-lg">Percentage - 81.54%</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About