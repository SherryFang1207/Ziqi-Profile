import React from 'react'
import Section from './common/Section'
import {SlBubble} from 'react-icons/sl'
import {FaRegHandPointRight, FaRegHandPointLeft} from 'react-icons/fa'

const About = () => {
  return (
    <Section title='About Me 👩🏻‍💻' subtitle='A dedicated junior web developer based in San Francisco, California 📍'>
      <p className='mx-20 w-3/4'>I graduated from UCSC with a Bachelor of Science degree in Computer Science. I possess great skill sets in Frontend developing technologies (HTML, CSS, JavaScript, Tailwind, Bootstrap), Backend development frameworks (Next.js, Express.js, MongoDB), low and high fidelity prototyping tools (Figma) and production deploying methods (Netlify, Vercel, AWS Lambda). My expertise lies in product designing and crafting well-organized codes. I am also a team player who adapts to industrial level agile development such as Scrum. </p>
      <div className='flex flex-row pt-2'>
      <div className='inline animate-wiggle text-[#14C2DD]'><FaRegHandPointRight className='scale-150 mx-4'/></div> 
      <span className='font-medium '>Please don’t hesitate to contact me if you are interested!</span>
      <div className='inline animate-wiggle text-[#14C2DD]'><FaRegHandPointLeft className='scale-150 mx-4'/></div> 
      </div>
      
    </Section>
  )
}

export default About