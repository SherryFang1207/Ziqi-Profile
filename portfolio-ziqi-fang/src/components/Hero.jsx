import React from 'react'
import {FaLinkedin, FaArrowDown,FaGithub} from 'react-icons/fa'
import chick from '../assets/chick.png'
import photo from '../assets/UCSC ID.jpg'

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
        
    <section className='flex flex-col items-center text-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:m-0 lg:p-16 justify-evenly lg:w-5/6 lg:pt-0'>
        <div>

        
        <h2 className='text-7xl text-[#3F2305] uppercase font-bold text-left m-8 ml-0'>Ziqi Fang</h2>
        
        {/* Multiple Typing Animation */}
        <section className='flex wrapper gap-3 items-start h-[28px] overflow-hidden font-semibold'>
            <span className='text-xl static-text text-[#F1C376]'>I am a </span>
            <ul className='dynamic-text text-xl text-left text-sky-300 flex flex-col'>
                {/* 1. Make a Border Div after word */}
                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-engineer after:bg-white top-0 animate-slide dark:after:bg-black text-[#F1C376]'>
                Software Engineer
                </li>
                </div>

                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-freelance after:bg-white top-0 animate-slide dark:after:bg-black text-[#F1C376]'>
                Freelance Web Developer
                </li>
                </div>

                <div>
                <li className='relative after:content-[""] after:border-l-2 after:border-[#F1C376] after:absolute after:left-0 after:h-full after:w-full inline-block after:animate-typing-modest after:bg-white top-0 animate-slide dark:after:bg-black text-[#F1C376]'>
                Modest Learner
                </li>
                </div>
                
                
            </ul>
            
        </section>

        
        
        


        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full '>
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
        <div className='shrink-0'>
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


        
    </section>
    <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-gray-400 text-2xl motion-safe:animate-big-bounce'/>
    </div>

    </section>
  )
}

export default Hero