import React from 'react'
import Section from './common/Section'
import UCSC_Icon from '../assets/UCSC.png'
import AWS_badge from '../assets/aws-certified-cloud-practitioner.png'
import {FaArrowDown} from 'react-icons/fa'




const Education = () => {
  return (
    <Section title='Education and Certificates' subtitle='“Education is not preparation for life; education is life itself.” —John Dewey'>
        <section className='w-5/6 flex flex-col gap-y-20 xl:flex-row xl:gap-x-20 justify-between items-center '>
            <div className='w-1/2 flex flex-col xl:flex-row gap-2 justify-evenly items-center'>
                {/* picture */}
                <div className='flex shrink-0'>
                    <img src={UCSC_Icon} alt='UCSC Icon' className='flex w-60 h-auto '></img>
                </div>
                {/* Description */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='tracking-wide font-semibold text-2xl py-2'> UCSC Computer Science B.S</h2>
                    <p>The Computer Science and Engineering (CSE) department spans multiple areas of research including theory, systems, AI/ML, architectures, and software.</p>
                    {/* before:from-[#57DDF3] before:to-[#C7F954] */}
                    <p className='flex text-center text-lg font-medium text-[#43c79f]'>Aquire Time: 2019-2022</p>
                    <p className='flex text-center text-md font-normal text-[#27725b]'>Issued By: University of California, Santa Cruz</p>
                    
                </div>
            </div>

            {/* 
            Badge link: https://www.credly.com/badges/f0b84dc2-6a9c-46d4-8c89-2697a9be2de9/public_url
             */}
             {/* Parameters:
             1. certification name
             2. certification image
             3. certification link
             4. certification description
             5. issuer
              */}
            <div className='w-1/2 flex flex-col xl:flex-row gap-2 justify-evenly items-center'>
                {/* picture */}
                <div className='flex shrink-0'>
                    <img src={AWS_badge} alt='aws_badge' className='flex w-60 h-auto '></img>
                </div>
                {/* Description */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='tracking-wide font-semibold text-2xl py-2'> AWS Certified Cloud Practitioner</h2>
                    <p>The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.</p>
                    {/* before:from-[#57DDF3] before:to-[#C7F954] */}
                    <p className='flex text-center text-lg font-medium text-[#43c79f]'>Aquire Time: 2023</p>
                    <p className='flex text-center text-md font-normal text-[#27725b]'>Issued By: Amazon Web Services Training and Certification</p>
                </div>
            </div>

        </section>

        <p className='pt-20 text-center tracking-wide text-xl drop-shadow-sm'>... And More Certificates in Progress! 💫</p>
        
    </Section>
  )
}

export default Education