import React from 'react'
import Section from './common/Section'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import contact from '../assets/mobile.png'
import Avatar from './Avatar';
import sherry2 from '../assets/avatar2.jpg'


const Contact = () => {
    const SOCIAL = [
        {
            id: 1,
            link: "https://twitter.com/SnowySherry_zf",
            icon: <FaTwitter/>,
        },
        {
            id: 2,
            link: "https://www.facebook.com/profile.php?id=100094812511745",
            icon: <FaFacebook/>,
        },
        {
            id: 3,
            link: "https://linkedin.com/in/ziqi-fang",
            icon: <FaLinkedin/>,
        },
    ];

  return (
    <Section title="📩 Contact Me 📩" subtitle="I am open to talk regarding freelancing or full-time oppurtinities. Hope to hear from you soon!">
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            
                <div className='overflow-hidden'>
                    <Avatar />
                </div>
                <div>
                    <p className='max-w-xs md:max-w-lg font-extralight'>
                        Please email me directly for the fastest response! My email address is: zfang1207@gmail.com. Thank you!
                    </p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {SOCIAL.map(({id, link, icon}) => (
                        <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-amber-200'>{icon}</a>
                    ))}
                </div>
            {/* Bottom Form */}
            <div className='p-8 text-left w-full'>
                <form action='https://getform.io/f/ff792e36-dfdc-417e-a98f-6b318e2812f0' method='POST'>
                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>
                                    name
                                </label>
                                <input type='text' name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' spellCheck="false" placeholder='Enter your name'></input>
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>
                                    phone
                                </label>
                                <input type='text' name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white ' spellCheck="false" placeholder='Enter your phone number'></input>
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>
                                    email
                                </label>
                                <input type='text' name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' spellCheck="false" placeholder='Enter your Email address'></input>
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>
                                    message
                                </label>
                                <textarea name='message' rows='10' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none' spellCheck="false" placeholder='Please leave a message so I can reply back. Thank you for your interest! 🙏🏻'></textarea>
                                
                            </div>
                        </div>


                        <div className='flex items-center justify-center'>
                            <button className='my-8 bg-gradient-to-r  from-orange-400 to-yellow-100 text-white px-6 py-3 font-bold uppercase rounded-md drop-shadow-md tracking-wider cursor-pointer transition duration-200  hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl'>
                                Send Message
                            </button>

                        </div>
                </form>
            </div>
        </div>
    </Section>
  )
}

export default Contact