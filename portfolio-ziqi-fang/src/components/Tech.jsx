import React from 'react'
import Section from './common/Section'

import HTML5 from '../assets/icons8-html-5.svg'
import CSS from '../assets/icons8-css.svg'
import JS from '../assets/icons8-javascript.svg'
import REACT from '../assets/icons8-react-native.svg'
import TAILWIND from '../assets/icons8-tailwind-css.svg'
import BOOTSTRAP from '../assets/icons8-bootstrap.svg'

import FIGMA from '../assets/icons8-figma.svg'

import GITHUB from '../assets/icons8-github.svg'

import RESTAPI from '../assets/api-svgrepo-com.svg'

import NODE_JS from '../assets/icons8-nodejs.svg'
import EXPRESS_JS from '../assets/icons8-express-js.svg'
import NEXT_JS from '../assets/nextjs-icon-svgrepo-com.svg'

import MYSQL from '../assets/icons8-mysql.svg'
import POSTGRES from '../assets/icons8-postgres.svg'
import MONGODB from '../assets/icons8-mongodb.svg'

import AWS_ICON from '../assets/icons8-amazon-web-services.svg'
// import JS from '../assets'

import TechCard from './common/TechCard'

const Tech = () => {
  return (
    <Section title='Tech Stack' subtitle='From prototyping to production deploying, every indispensable step surely make a difference. 🦄'>
    {/* Frontend: 1. HTML 2. CSS 3. JS 4. React 5. Tailwind 6. Bootstrap  */}
    {/* Prototyping and designing: 1. Figma */}
    {/* Version Control: 1. Github */}
    {/* API: 1. RESTful API */}
    {/* Backend: 1. Node.js 2. Express.js 3. Next.js */}
    {/* Database: 1. MySQL 2. PostgresSQL 3. MongoDB */}
    {/* Cloud: 1. AWS */}
    <div className='grid w-5/6 grid-cols-3 sm:w-3/4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 md:w-3/5 gap-6 md:gap-8'>
      {/* Frintend */}
      <TechCard icon={HTML5} title='HTML'/>
      <TechCard icon={CSS} title='CSS'/>
      <TechCard icon={JS} title='JavaScript'/>
      <TechCard icon={REACT} title='React'/>
      <TechCard icon={TAILWIND} title='Tailwind CSS'/>
      <TechCard icon={BOOTSTRAP} title='Bootstrap'/>
      {/* Prototyping and designing */}
      <TechCard icon={FIGMA} title='Figma'/>
      {/* Version Control: 1. Github */}
      <TechCard icon={GITHUB} title='Github'/>
      {/* API: 1. RESTful API */}
      <TechCard icon={RESTAPI} title='Restful API'/>
      {/* Backend: 1. Node.js 2. Express.js 3. Next.js */}
      <TechCard icon={NODE_JS} title='Node.js'/>
      <TechCard icon={EXPRESS_JS} title='Express.js'/>
      <TechCard icon={NEXT_JS} title='Next.js'/>
      {/* Database: 1. MySQL 2. PostgresSQL 3. MongoDB */}
      <TechCard icon={MYSQL} title='MySQL'/>
      <TechCard icon={POSTGRES} title='PostgresDB'/>
      <TechCard icon={MONGODB} title='MongoDB'/>
      {/* Cloud: 1. AWS */}
      <TechCard icon={AWS_ICON} title='AWS Cloud'/>




      

    </div>

    </Section>
  )
}

export default Tech