import React from "react";
import Section from "../components/common/Section";
import Carousel from "./common/Carousel";

// import Mini-project thumbnails:
import Beach_Login from "../assets/thumbnails/Beach-Log-in-thumbnail.png";
import Beach_Price_Grid from "../assets/thumbnails/Beach-Price-Grid-thumbnail.png";
import Cosmetic_Product_Model from "../assets/thumbnails/Cosmetic-Product-Model-thumbnail.png";
import Matcha_Email_Subsribe from "../assets/thumbnails/Matcha-Subscribe-thumbnail.png";
import Restaurant_Grid from "../assets/thumbnails/Restaurant-Grid-thumbnail.png";

import Promptopia_thumbnail from "../assets/thumbnails/Promptopia-thumbnail.png";
import Clipboard_thumbnail from "../assets/thumbnails/clipboard-thumbnail.png";
import Restaurant_travel_advisor from "../assets/thumbnails/Restaurant-travel-advisor-thumbnail.png";
import Movieland_thumbnail from "../assets/thumbnails/MovieLand-thumbnail.png";
const Mini = () => {
  const PROJECTS = [
    {
      id: 1,
      thumbnail: Promptopia_thumbnail,
      projName: "Promptopia",
      description:
        "Create, edit, share and view Great AI prompts on Promptopia! 🙌🏻",
      link: "https://promptopia-app-psi.vercel.app/",
    },
    {
      id: 2,
      thumbnail: Clipboard_thumbnail,
      projName: "Clip Board App",
      description: "A decent frontend page for a great future Clipboard App!🖊️",
      link: "https://ziqifangclipboardapp.netlify.app/",
    },
    {
      id: 3,
      thumbnail: Restaurant_travel_advisor,
      projName: "Restaurant Travel Advisor",
      description:
        "Don't know what to eat during travel? Consult our Restaurant Travel Advisor! 🍔",
      link: "https://travel-restaurant-advisor-ziqi-fang.netlify.app/",
    },
    {
      id: 4,
      thumbnail: Movieland_thumbnail,
      projName: "MovieLand",
      description: "Search and find your favorite movies! 🎥",
      link: "https://movieland-ziqi-fang.netlify.app",
    },
    {
      id: 5,
      projName: "Login Page",
      description: "Responsive Beach Log-in Page",
      link: "https://responsive-login-ziqi-fang.netlify.app/",
      thumbnail: Beach_Login,
    },
    {
      id: 6,
      projName: "Pricing Grid",
      description: "Responsive Pricing Grid Page",
      link: "https://pricing-grid-ziqi-fang.netlify.app/",
      thumbnail: Beach_Price_Grid,
    },
    {
      id: 7,
      projName: "Product Display Model",
      description: "Responsive Product Display Model",
      link: "https://product-model-ziqi-fang.netlify.app/",
      thumbnail: Cosmetic_Product_Model,
    },
    {
      id: 8,
      projName: "Email Subscribe Component",
      description: "Responsive Email Subscribe Page",
      link: "https://email-subscribe-ziqi-fang.netlify.app/",
      thumbnail: Matcha_Email_Subsribe,
    },
    {
      id: 9,
      projName: "Restaurant Review Component",
      description: "Responsive Email Subscribe Page",
      link: "https://restaurant-review-ziqi-fang.netlify.app/",
      thumbnail: Restaurant_Grid,
    },
  ];
  const projects = [
    {
      id: 1,
      image: Promptopia_thumbnail,
      title: "Promptopia",
      description:
        "Create, edit, share and view Great AI prompts on Promptopia! 🙌🏻",
      github: "https://github.com/SherryFang1207/Promptopia-app",
      demo: "https://promptopia-app-psi.vercel.app/",
    },
    {
      id: 2,
      image: Clipboard_thumbnail,
      title: "Clip Board App",
      description: "A decent frontend page for a great future Clipboard App!🖊️",
      github: "https://github.com/SherryFang1207/clipboard-project",
      demo: "https://ziqifangclipboardapp.netlify.app/#",
    },
    {
      id: 3,
      image: Restaurant_travel_advisor,
      title: "Restaurant Travel Advisor",
      description:
        "Don't know what to eat during travel? Consult our Restaurant Travel Advisor! 🍔",
      github: "https://github.com/SherryFang1207/Travel-Restaurant-Advisor-App",
      demo: "https://travel-restaurant-advisor-ziqi-fang.netlify.app/",
    },
    {
      id: 4,
      image: Movieland_thumbnail,
      title: "MovieLand",
      description: "Search and find your favorite movies! 🎥",
      github: "https://github.com/SherryFang1207/MovieLand-App",
      demo: "https://movieland-ziqi-fang.netlify.app",
    },
  ];

  return (
    <Section
      title="Frontend Mini-Projects"
      subtitle="Little UI component, Huge improvement in User Experience."
    >
      <Carousel content={PROJECTS} autoSlide={true} />
    </Section>
  );
};

export default Mini;
