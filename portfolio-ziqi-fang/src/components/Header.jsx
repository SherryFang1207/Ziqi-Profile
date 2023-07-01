import React from 'react';
import {MdNightsStay, MdSunny} from 'react-icons/md';


const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className='darkMode-color'>
      <nav className='flex justify-between items-center p-5'>
        <h1 className='text-lg'>
          SnowyBunny
        </h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ?
            <MdSunny className='text-2xl cursor-pointer' /> :
            <MdNightsStay className='text-2xl cursor-pointer' />
          }
          

        </div>
      </nav>
    </header>
  )
}

export default Header;
