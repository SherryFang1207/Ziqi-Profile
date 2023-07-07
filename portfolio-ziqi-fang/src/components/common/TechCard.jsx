import React from 'react'

const TechCard = ({icon, title}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center rounded-md drop-shadow-md hover:drop-shadow-2xl hover:scale-105 transition duration-300 delay-75 gap-8 xl:gap-8'>
        <div className='h-3/5 w-full'>
            <img src={icon} className='w-full h-auto object-contain items-center'/>
        </div>
        
        <p className='w-full text-md font-light h-2/5 tracking-tight break-words'>{title}</p>
      </div>
  )
}

export default TechCard