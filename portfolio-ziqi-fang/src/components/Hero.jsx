import React from 'react'
import {FaTwitter, FaFacebook,FaLinkedin, FaArrowDown} from 'react-icons/fa'
import chick from '../assets/chick.png'
import photo from '../assets/UCSC ID.jpg'

// JS code for Scrolling functionality
window.addEventListener("scroll", function() {
    const downArrow = this.document.querySelector('.down-arrow');
    if (this.scrollY >= 90) {
        downArrow.classList.add("hide-down-arrow");
    }else{
        downArrow.classList.remove("hide-down-arrow");
    }
})

const Hero = () => {
  const SOCIAL = [
    {
        id: 1,
        link: "https://twitter.com",
        icon: <FaTwitter/>,
    },
    {
        id: 2,
        link: "https://facebook.com",
        icon: <FaFacebook/>,
    },
    {
        id: 3,
        link: "https://linkedin.com",
        icon: <FaLinkedin/>,
    },
];

  return (
    <section className='min-h-screen flex flex-col p-5 items-center text-center'>
        <h2 className='text-5xl text-orange-400 uppercase font-bold'>Ziqi Fang</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>
        <span className='animate-pulse text-2xl'>🐳</span>Greetings!<span className='animate-pulse text-2xl'>🐳</span>
        Welcome to my portfolio site! I am a freelance software engineer.
        </p>


        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {SOCIAL.map(({id, link, icon}) => (
                <a 
                href={link}
                key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-orange-400'
                >
                    {icon}
                </a>
            ))}
        </div>

        {/* Avatar and Resume */}
        <div>
            <img src={chick}
            alt='Avatar alt'
            className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-orange-400 rounded-xl pt-5'
            ></img>
            <a
            href={photo}
            download={true}
            className='flex justify-center items-center mt-10 text-black py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-100 darkMode-color'
            >
                Download Resume
            </a>
        </div>


        <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
        </div>
    </section>
  )
}

export default Hero