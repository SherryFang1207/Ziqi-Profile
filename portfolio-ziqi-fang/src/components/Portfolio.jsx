import React from 'react'
import Section from './common/Section'

import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            title: "Best App1",
            github: "https://google.com",
            demo: "https://google.com",
        },
        {
            id: 2,
            image: p2,
            title: "Best App2",
            github: "https://google.com",
            demo: "https://google.com",
        },
        {
            id: 3,
            image: p3,
            title: "Best App3",
            github: "https://google.com",
            demo: "https://google.com",
        },
        {
            id: 4,
            image: p4,
            title: "Best App4",
            github: "https://google.com",
            demo: "https://google.com",
        },
        {
            id: 5,
            image: p5,
            title: "Best App5",
            github: "https://google.com",
            demo: "https://google.com",
        },
        {
            id: 6,
            image: p6,
            title: "Best App6",
            github: "https://google.com",
            demo: "https://google.com",
        },
    ];

  return (
    <Section title="Portfolio📃"
    subtitle="These are the recent projects I have been working on. Some of them I have worked before I gained some experience so go gentle with them."
    >
    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({id, image, title, github, demo}) => (
            <div key={id}
                className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'
            >
                <img src={image} alt={title} className='w-2/3'/>
                <div className='w-1/3 flex flex-col items-center justify-evenly'>
                    <h2>{title}</h2>
                    <a href={github} className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110' target='_blank' rel='noopener noreferrer'>
                        <FaGithub/>
                    </a>
                    <a href={demo} className='text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110' target='_blank' rel='noopener noreferrer'>
                        <FaExternalLinkAlt/>
                    </a>
                </div>
            </div>
        ))}
    </div>

    </Section>
  )
}
