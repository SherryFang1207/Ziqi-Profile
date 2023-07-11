import React from 'react'
import Section from '../components/common/Section'
import Carousel from './common/Carousel'

// import Mini-project thumbnails:
import Beach_Login from '../assets/thumbnails/Beach-Log-in-thumbnail.png'
import Beach_Price_Grid from '../assets/thumbnails/Beach-Price-Grid-thumbnail.png'
import Cosmetic_Product_Model from '../assets/thumbnails/Cosmetic-Product-Model-thumbnail.png'
import Matcha_Email_Subsribe from '../assets/thumbnails/Matcha-Subscribe-thumbnail.png'
import Restaurant_Grid from '../assets/thumbnails/Restaurant-Grid-thumbnail.png'

const Mini = () => {
    const PROJECTS = [
        {
            id:1,
            projName: "Login Page",
            description: "Responsive Beach Log-in Page",
            link: "https://responsive-login-ziqi-fang.netlify.app/",
            thumbnail: Beach_Login,
        },
        {
            id:2,
            projName: "Pricing Grid",
            description: "Responsive Pricing Grid Page",
            link: "https://pricing-grid-ziqi-fang.netlify.app/",
            thumbnail: Beach_Price_Grid,
        },
        {
            id:3,
            projName: "Product Display Model",
            description: "Responsive Product Display Model",
            link: "https://product-model-ziqi-fang.netlify.app/",
            thumbnail: Cosmetic_Product_Model,
        },
        {
            id:4,
            projName: "Email Subscribe Component",
            description: "Responsive Email Subscribe Page",
            link: "https://email-subscribe-ziqi-fang.netlify.app/",
            thumbnail: Matcha_Email_Subsribe,
        },
        {
            id:5,
            projName: "Restaurant Review Component",
            description: "Responsive Email Subscribe Page",
            link: "https://restaurant-review-ziqi-fang.netlify.app/",
            thumbnail: Restaurant_Grid,
        },
    ];

  return (
    <Section title="UI Component Mini-Projects" subtitle="Little UI component, Huge improvement in User Experience.">
        <Carousel content={PROJECTS} autoSlide={true}/>
    </Section>
  )
}

export default Mini