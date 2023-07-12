import React from 'react'
import {FaLinkedin, FaArrowDown,FaGithub} from 'react-icons/fa'
import chick from '../assets/chick.png'
import resume from '../assets/Ziqi Fang Resume.pdf'
import Avatar from './Avatar'
import Profile_Avatar from './Profile_Avatar'

// JS code for Scrolling functionality
window.addEventListener("scroll", function() {
    const downArrow = this.document.querySelector('.down-arrow');
    if (this.scrollY >= 180) {
        downArrow.classList.add("hide-down-arrow");
    }else{
        downArrow.classList.remove("hide-down-arrow");
    }
})

const Hero = () => {
  const SOCIAL = [
    {
        id: 1,
        link: "https://github.com/SherryFang1207",
        icon: <FaGithub/>,
    },
    {
        id: 2,
        link: "https://linkedin.com/in/ziqi-fang",
        icon: <FaLinkedin/>,
    },
];

  return (
    <section className='flex flex-col justify-center items-center min-h-screen'>
        
    <section className='flex flex-col items-center text-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:m-0 lg:p-16 justify-evenly lg:w-5/6 lg:pt-0 lg:pb-20'>
        <div>

        <h3 className='text-[#3F2305] text-left text-xl md:text-2xl'>Hello! My name is </h3>
        <h2 className='text-6xl md:text-7xl text-[#3F2305] uppercase font-bold text-left m-8 ml-0 mt-5 mb-5 tracking-wide'>Ziqi Fang</h2>
        
        {/* Multiple Typing Animation  h-[32px] */}
        <section className='flex lg:block xl:flex xl:flex-row wrapper gap-3 items-start font-semibold lg:flex-col lg:gap-0 xl:gap-3 flex-col'>
            <p className='text-xl md:text-2xl static-text text-[#F1C376] text-left'>And I'm a </p>
            <div className='block overflow-hidden h-[28px] md:h-[32px] xl:flex'>
                
            
            <ul className='dynamic-text text-xl md:text-2xl text-left text-[#e29734] flex flex-col font-semibold '>
                {/* 1. Make a Border Div after word text-[#F1C376]*/}
                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-engineer after:bg-white top-0 animate-slide_xl md:animate-slide_2xl dark:after:bg-black '>
                Software Engineer
                </li>
                </div>

                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-freelance after:bg-white top-0 animate-slide_xl md:animate-slide_2xl dark:after:bg-black '>
                Freelance Web Developer
                </li>
                </div>

                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-modest after:bg-white top-0 animate-slide_xl md:animate-slide_2xl dark:after:bg-black '>
                Modest Learner
                </li>
                </div>
                
                
            </ul>
            </div>
            
        </section>
        {/* color palette:
            [#3F2305] */}
        <a
            href={resume}
            download={true}
            className='flex justify-center items-center mt-10 text-white py-2 rounded-lg bg-orange-400 darkMode-color
            tracking-wide
            transition hover:-translate-y-1 hover:scale-110 hover:tracking-widest ease-in-out duration-500 delay-75 relative 
            drop-shadow-sm hover:drop-shadow-lg
            hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-100 hover:to-orange-400
            hover:font-medium'
            >
                Download Resume
            </a>

        
        
        


        <div className='flex justify-evenly py-8 lg:py-8 text-3xl w-full md:justify-evenly md:gap-6 lg:justify-evenly '>
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

        </div>

        {/* Avatar and Resume */}
        {/* <div className='shrink-0 lg:pb-40'>
            <img src={chick}
            alt='Avatar alt'
            className='w-60 h-60 md:w-72 md:h-72 lg:w-72 lg:h-72 object-cover object-top bg-gradient-to-b from-orange-400 rounded-xl pt-5'
            ></img>
        </div> */}
        <div className='lg:pb-20'>
            {/* <Avatar/> */}
            <Profile_Avatar/>
        </div>
        


        
    </section>
    <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400 text-2xl motion-safe:animate-big-bounce'/>
    </div>

    </section>
  )
}

export default Hero