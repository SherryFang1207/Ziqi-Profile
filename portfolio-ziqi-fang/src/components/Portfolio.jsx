import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Promptopia_thumbnail from "../assets/thumbnails/Promptopia-thumbnail.png";
import Clipboard_thumbnail from "../assets/thumbnails/clipboard-thumbnail.png";
import Restaurant_travel_advisor from "../assets/thumbnails/Restaurant-travel-advisor-thumbnail.png";
import Movieland_thumbnail from "../assets/thumbnails/MovieLand-thumbnail.png";
import Sushier_Snapshot from "../assets/sushier-app-snapshot.png";

export const Portfolio = () => {
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
  const lastest_project = [
    {
      id: 1,
      image: Sushier_Snapshot,
      title: "Sushier",
      description:
        "Experience Sushier – where sushi meets cutting-edge technology! Explore Sushier online E-commerce platform, meticulously crafted using MERN stack(React, Next.js, Express.js and MongoDB Atlas) and modern web development to bring you a seamless sushi ordering experience.",
      github: "https://github.com/SherryFang1207/sushier-app",
      demo: "https://www.sushier.app/",
    },
  ];

  return (
    <Section
      title="Portfolio📃"
      subtitle="Some of my recent projects are displayed here. I hope you like them!"
    >
      <div className="mb-10 -mt-5 hidden xl:block">
        {lastest_project.map(
          ({ id, image, title, description, github, demo }) => (
            <div
              key={id}
              className="max-w-5xl flex flex-col md:flex-row shadow-lg shadow-gray-300 rounded-2xl overflow-hidden my-4"
            >
              <img src={image} alt={title} className="w-full md:w-2/3 my-2" />
              <div className="w-full md:w-1/3 flex flex-col items-center justify-evenly p-2">
                <h2 className="tracking-wide text-xl font-semibold">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-row w-full justify-evenly my-4">
                  <a
                    href={github}
                    className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href={demo}
                    className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={30} />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mb-10 -mt-5 block xl:hidden">
        {lastest_project.map(
          ({ id, image, title, description, github, demo }) => (
            <div
              key={id}
              className="max-w-3xl flex flex-col md:flex-row shadow-lg shadow-gray-300 rounded-2xl overflow-hidden my-4"
            >
              <img src={image} alt={title} className="w-full md:w-2/3 my-2" />
              <div className="w-full md:w-1/3 flex flex-col items-center justify-evenly p-2">
                <h2 className="tracking-wide text-xl font-semibold">{title}</h2>
                <p>{description}</p>
                <div className="flex flex-row w-full justify-evenly my-4">
                  <a
                    href={github}
                    className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={demo}
                    className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="grid gap-8 lg:gap-14 xl:grid-cols-2">
        {projects.map(({ id, image, title, description, github, demo }) => (
          <div
            key={id}
            className="max-w-3xl flex flex-col md:flex-row shadow-lg shadow-gray-300 rounded-2xl overflow-hidden my-4"
          >
            <img src={image} alt={title} className="w-full md:w-2/3 my-2" />
            <div className="w-full md:w-1/3 flex flex-col items-center justify-evenly p-2">
              <h2 className="tracking-wide text-xl font-semibold">{title}</h2>
              <p>{description}</p>
              <div className="flex flex-row w-full justify-evenly my-4">
                <a
                  href={github}
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={demo}
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
