import React from 'react'
import Section from './common/Section'
import UCSC_Icon from '../assets/UCSC.png'

const Education = () => {
  return (
    <Section title='Education and Certificates' subtitle='“Education is not preparation for life; education is life itself.” —John Dewey'>
        <section className='w-5/6 flex flex-col lg:flex-row justify-evenly items-center '>
            <div className='w-1/2 flex flex-col lg:flex-row gap-2 justify-evenly items-center'>
                {/* picture */}
                <div className='flex shrink-0'>
                    <img src={UCSC_Icon} alt='UCSC Icon' className='flex w-60 h-60 '></img>
                </div>
                {/* Description */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='tracking-wide font-semibold text-2xl py-2'> UCSC Computer Science B.S</h2>
                    <p>The Computer Science and Engineering (CSE) department spans multiple areas of research including theory, systems, AI/ML, architectures, and software.</p>
                    <p className='flex text-center text-lg font-medium'>Aquire Time: 2019-2022</p>
                </div>
            </div>
            <div className='w-1/2'>AWS Certificates</div>
        </section>
    </Section>
  )
}

export default Education