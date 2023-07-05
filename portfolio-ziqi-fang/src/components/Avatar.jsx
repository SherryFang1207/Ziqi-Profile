import React from 'react'
import Section from './common/Section'
import profile from '../assets/cmt-photo.jpg'

const Avatar = () => {
  return (
    <section className='wrapper flex justify-center items-center'>
        <section className='w-60 h-60 bg-black relative rounded-full
        before:content-[""] before:absolute before:bg-gradient-to-br before:from-[#d400d4] before:to-[#00ccff]
        before:-inset-y-3 before:inset-x-16
        hover:before:-inset-y-6 hover:before:inset-x-0
        before:transition before:ease-in-out before:duration-300 before:delay-100
        before:animate-rotating
        after:content-[""] after:absolute after:inset-2 after:bg-white after:rounded-full after:z-10
        overflow-hidden transition ease-in-out duration-500
        '>
        <div className='content absolute border-black border-[6px] z-20 rounded-full inset-6 overflow-hidden
        group flex flex-col justify-center items-center 
        '>
            <img src={profile} alt='profile image'
                className='absolute object-cover top-0 left-0 w-full h-full group-hover:opacity-0 transition ease-in-out duration-300 delay-75 z-10 pointer-events-none'
            />
            <h2 className='text-center font-semibold text-lg tracking-wide relative'>Ziqi Fang</h2>
            <span className='m-2 font-light text-sm tracking-normal relative'>UX/UI Designer</span>
            <a href='https://google.com'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 p-3 bg-yellow-100 rounded-md font-semibold tracking-wide
            transition hover:-translate-y-1 hover:scale-110 hover:tracking-widest ease-in-out duration-500 delay-75 relative 
            drop-shadow-sm hover:drop-shadow-lg'
            >HIRE ME</a>
            
        </div>

        </section>
    </section>
    
  )
}

export default Avatar

// 
//  before:animate-rotating