import React from 'react'
import BackgroundImage from '../images/black-3.png'
import BookStoreImage from '../images/bookstore.jpg'
import AmazonImage from '../images/amazon-clone.png'
import WeatherImage from '../images/weather-2021-12-07.avif'
function Projects() {
    const projects = [
        {
            title: 'Faqir-Chand Book Store',
            image: `${BookStoreImage}`, 
            githubUrl: 'https://github.com/Mayurghule2/Faqir-Chand-Bookstore',
        },
        {
            title: 'Amazon Clone',
            image: `${AmazonImage}`, 
            githubUrl: 'https://github.com/Mayurghule2/Amazon-Clone',
        },
        {
            title: 'Weather App',
            image: `${WeatherImage}`, 
            githubUrl: 'https://github.com/Mayurghule2/Weather-App',
        },
        
    ];
    return (
        <div 
            className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${BackgroundImage})` }} 
        >        
            <section
                className=" max-w-5xl h-[200vh] mx-auto py-4 lg:py-12 px-5  ">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 border-b-2 border-gray-300 pb-4 heading flex justify-center">Projects</h2>

                <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ml-6 lg:ml-0 mr-6 lg:mr-0 ">
                    {projects.map((project, index) => (
                        <div key={index} className=" bg-black border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-48 lg:h-64 object-cover" />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl text-zinc-300 font-semibold mb-4 project-heading">{project.title}</h3>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm lg:text-lg font-semibold inline-block bg-white  text-black py-1 lg:py-2 px-4 lg:px-6 rounded-full shadow-sm bg-gradient-to-r hover:text-white hover:from-pink-600 hover:to-orange-600 hover:shadow-white transition"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </div>
        
    )
}

export default Projects