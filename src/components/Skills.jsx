import React from 'react'
import BackgroundImage from '../images/black-3.png'
import CPP from '../images/c.svg'
import JavaScript from '../images/JavaScript.png'
import HTML from '../images/file-type-html.svg'
import CSS from '../images/file-type-css.svg'
import ReactJS from '../images/file-type-reactjs.svg'
import NodeJS from '../images/node-js.svg'
import MongoDB from '../images/mongodb-original.svg'
import Tailwind from '../images/tailwind-css.svg'
import Github from '../images/github.webp'
import Git from '../images/git.svg'
import Postman from '../images/postman-2.png'
import MySQL from '../images/mysql.png'


const SkillCard = ({ icon, name }) => (
  <div className="flex items-center gap-2 lg:gap-7 bg-gradient-to-r from-black to-zinc-800 rounded-lg p-2 hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl ">
    <img className=' ml-1 lg:ml-5 w-6 lg:w-10 h-6 lg:h-10 rounded-full' src={icon} />
    <span className="text-slate-200 text-md lg:text-xl font-semibold">{name}</span>
  </div>
);
function Skills() {

  const skills = [
    { name: 'C++', icon: `${CPP}` },
    { name: 'Javascript', icon: `${JavaScript}` },
    { name: 'HTML', icon: `${HTML}` },
    { name: 'CSS', icon: `${CSS}` },
    { name: 'React JS', icon: `${ReactJS}` },
    { name: 'Node JS', icon: `${NodeJS}` },
    { name: 'MongoDB', icon:  `${MongoDB}` },
    { name: 'Tailwind', icon: `${Tailwind}` },
    { name: 'Github', icon:  `${Github}` },
    { name: 'Git', icon: `${Git}` },
    { name: 'Postman', icon:  `${Postman}` },
    { name: 'MySQL', icon: `${MySQL}` },
  ];
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: `url(${BackgroundImage})` }} >
      <div className="max-w-5xl mx-auto py-12 px-3">
        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-6 pb-1 lg:pb-2 heading border-b-2 flex justify-center'>Skills</h2>
        <div className=" p-6 rounded-xl">
          <div className="grid grid-cols-2  md:grid-cols-3 gap-6 heading ">
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills