import React from 'react'
import Section from './common/Section'
import profile from '../assets/cmt-photo.jpg'
import self_portrait from '../assets/Self-Portrait.jpg'
import sherry1 from '../assets/avatar1.jpg'

const Profile_Avatar = ({profile_photo}) => {
  return (
    <section className='wrapper flex justify-center items-center min-h-0'>
        {/* Outer Ring */}
        {/* color palatte:
          1. Dark Mode: bg-black before:from-[#d400d4] before:to-[#00ccff]
         */}
        <section className='w-64 h-64 sm:w-80 sm:h-80 relative rounded-full
        before:content-[""] before:absolute before:bg-gradient-to-br bg-[#FDF4E3] before:from-[#57DDF3] before:to-[#C7F954]
        before:-inset-y-3 before:inset-x-16
        hover:before:-inset-y-6 hover:before:inset-x-0
        before:transition before:ease-in-out before:duration-300 before:delay-100
        before:animate-rotating
        before:opacity-0 sm:before:opacity-100
        after:content-[""] after:absolute after:inset-2 after:bg-white after:rounded-full after:z-10
        overflow-hidden transition ease-in-out duration-500 min-h-0 flex
        '>
        {/* Inner Ring */}
        <div className='content absolute border-[#dacdb5] border-[6px] z-20 rounded-full inset-6 overflow-hidden
        group flex flex-col justify-center items-center 
        '>
            {/* Inner Content */}

            {/* First Layer Photo */}
            <img src={sherry1} alt='profile image'
                className='absolute object-cover top-0 left-0 w-full h-full group-hover:opacity-0 transition ease-in-out duration-300 delay-75 z-10 pointer-events-none'
            />

            {/* Second Layer Content */}
            <h2 className='text-center font-semibold text-lg tracking-wide relative'>Ziqi Fang</h2>
            <span className='m-2 font-light text-sm tracking-normal relative'>Now Actively Applying!</span>
            <a href="https://linkedin.com/in/ziqi-fang"
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 p-3 bg-yellow-100 rounded-md font-semibold tracking-wide
            transition hover:-translate-y-1 hover:scale-110 hover:tracking-widest ease-in-out duration-500 delay-75 relative 
            drop-shadow-sm hover:drop-shadow-lg'
            >CLICK TO HIRE ME</a>
            
        </div>

        </section>
    </section>
    
  )
}

export default Profile_Avatar

// 
//  before:animate-rotating