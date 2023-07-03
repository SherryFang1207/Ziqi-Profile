import React from 'react'
import Section from './common/Section'
import junimo from '../assets/junimo.png'


const Testimonials = () => {
    const TESTIMONIALS = [
        {
            id: 1,
            image: junimo,
            name: "Junimo No.1",
            comment: 'Adipisicing nisi commodo ea ipsum nisi. Et qui elit do laboris et proident consequat aliqua minim. Proident fugiat consectetur ut fugiat consequat veniam ipsum proident mollit quis laboris officia qui non. Ut eu nulla id elit ad nostrud. Fugiat Lorem amet sit laboris amet est nostrud. Id commodo et pariatur magna.',

        },
        {
            id: 2,
            image: junimo,
            name: "Junimo No.2",
            comment:"Aute est quis enim ut incididunt Lorem et ipsum ut tempor reprehenderit tempor sint. Esse Lorem anim reprehenderit enim laborum tempor reprehenderit. Ex ex sint pariatur officia fugiat ullamco et amet sit laboris reprehenderit minim ut. Consectetur ad voluptate adipisicing deserunt dolore cupidatat tempor est sit enim exercitation. Ad ad ad sit pariatur et sit proident. Magna nisi deserunt pariatur aliqua velit.",

        },
        {
            id: 1,
            image: junimo,
            name: "Junimo No.3",
            comment:"Nisi occaecat in occaecat excepteur quis nostrud ex ex Lorem. Quis anim nostrud amet veniam ad. Exercitation commodo mollit anim est laborum nulla consectetur quis et occaecat. Ea non voluptate nulla consectetur irure elit est enim cupidatat id. Ad id ut magna ullamco duis.",

        },
    ];
  return (
    <Section title='Testimonials 💬' 
    subtitle='This is what my other clients have to say about me. I accept clients from all round the world!'
    >
        <div className='max-w-xl flex flex-col gap-2'>
            {TESTIMONIALS.map(({id, image, name, comment}) => (
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div className='w-1/3'>
                        <img src={image} alt=''
                        className='w-20 h-20 object-cover object-top pt-2 dark:bg-gradient-to-t from-slate-500 rounded-xl'
                        />
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
            ))}
        </div>

    </Section>
  )
}

export default Testimonials