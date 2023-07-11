import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({content:slides, autoSlide = false, autoSlideInterval = 3000}) => {
  // State Variables
  const [curr, setCurr] = useState(0);

  // Slide moving functions:
  const prev = () => (
    setCurr((curr) => (curr === 0? slides.length - 1: curr - 1))
  );
  const next = () => (
    setCurr((curr) => (curr === slides.length - 1? 0: curr + 1))
  );

  useEffect(() => {
    if (!autoSlide){
      return;
    }else{
      const slideInterval = setInterval(next, autoSlideInterval);
      return (() => clearInterval(slideInterval));
    }
  }, [])
  return (
    
    <div className='max-w-2xl overflow-hidden relative rounded-md group'>
      <div className='flex transition-transform ease-out duration-700 ' style={{transform:`translateX(-${curr * 100}%)`}}>
      {slides.map((s) => (
          <>
          
            <img src={s.thumbnail} className='object-cover group-hover:blur-sm transition duration-500'/>
            
            </>
        ))}
    </div>

      {/* Button: Prev & Next */}
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-500 drop-shadow-sm transition duration-200 hover:bg-white hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md'>
          <FaChevronLeft className='w-10 h-auto'/>
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-500 drop-shadow-sm transition duration-200 hover:bg-white hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md'>
          <FaChevronRight className='w-10 h-auto'/>
        </button>
      </div>

      {/* Dotted Preview Bar */}
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr===i? "p-2" : "bg-opacity-50"}`}
            ></div>
          ))}

        </div>
      </div>

      <div className='opacity-0 drop-shadow-sm flex flex-col absolute inset-32 items-center justify-center p-1 bg-white rounded-lg darkMode-color group-hover:opacity-100 transition duration-300 delay-75 group-hover:drop-shadow-xl'>
        <p className='tracking-wide text-lg p-4'>{slides[curr].projName}</p>
        <p className='tracking-wide text-sm p-2'>{slides[curr].description}</p>
        <a href={slides[curr].link} className='text-md cursor-pointer duration-150 hover:scale-110 m-4' target='_blank' rel='noopener noreferrer'>
          <p className='p-4 bg-yellow-100 rounded-xl'>Click for Live View</p>
        </a>
      </div>
    </div>
  )
}

export default Carousel