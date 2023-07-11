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
    
    <div className='max-w-lg overflow-hidden relative rounded-md'>
      <div className='flex transition-transform ease-out duration-700 ' style={{transform:`translateX(-${curr * 100}%)`}}>
      {slides.map((s) => (
            <img src={s.thumbnail} className='object-cover '/>
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
    </div>
  )
}

export default Carousel