import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
function Contact() {
  const icons = [

    { Icon: FaGithub, href: 'https://github.com/Mayurghule2' },
    { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/mayurghule/' },
  ];

  const handleEmailClick = () => {
    const email = 'ghulemayur784@gmail.com';  // Recipient email
    const subject = ''; // Email subject
    const body = ''; // Email body

    // Construct the Gmail URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new window
    window.open(gmailLink, '_blank');
  };


  return (

    <>

      <footer className=" text-white ">
        
          <div className="flex justify-center items-center space-x-8 p-4">
            {icons.map(({ Icon, href }, index) => (
              <Link
                key={index}
                to={href}
                className=" bg-white w-12 lg:w-[60px] h-12 lg:h-[60px]  rounded-full flex items-center justify-center text-black bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-pink-500 transition-colors shadow-md hover:shadow-white hover:text-white"
              >
                <Icon className="w-6 lg:w-10 h-6 lg:h-9" />
              </Link>
            ))}
            <Link
              className=" bg-white w-12 lg:w-[60px] h-12 lg:h-[60px]  rounded-full flex items-center justify-center text-black bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-pink-500 transition-colors shadow-md hover:shadow-white hover:text-white"
              onClick={handleEmailClick}
            >
              <SiGmail className="w-6 lg:w-10 h-6 lg:h-9" />
            </Link>

          </div>

       
      </footer>
    </>
  )
}

export default Contact;