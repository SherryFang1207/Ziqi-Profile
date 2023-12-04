import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Promptopia_thumbnail from "../assets/thumbnails/Promptopia-thumbnail.png";
import Clipboard_thumbnail from "../assets/thumbnails/clipboard-thumbnail.png";
import Restaurant_travel_advisor from "../assets/thumbnails/Restaurant-travel-advisor-thumbnail.png";
import Movieland_thumbnail from "../assets/thumbnails/MovieLand-thumbnail.png";
import Sushier_Snapshot from "../assets/sushier-app-snapshot.png";
import ChatPDF_Snapshot from "../assets/chatPDFSnapshot.png";
import iOSToDolist_Snapshot from "../assets/ToDoListSnapShot.png";

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
        "Sushier is a responsive E-commerce web application using React.js, Tailwind CSS and Next.js Implemented robust user authentication with NextAuth and RESTful API with Node.js and Express.js.",
      github: "https://github.com/SherryFang1207/sushier-app",
      demo: "https://www.sushier.app/",
    },
    {
      id: 2,
      image: ChatPDF_Snapshot,
      title: "ChatPDF",
      description:
        "ChatPDF is an AI-driven chatbot application, enhancing user engagement with PDF content. Integrated Stripe API for subscription-based revenue model and Clerk Auth for user authentication and is designed with Tailwind CSS and Shadcn, ensuring intuitive UX",
      github: "https://github.com/SherryFang1207/ChatPDF",
      demo: "https://chat-pdf-pied-psi.vercel.app/",
    },
  ];
  const iOS_project = [
    {
      id: 1,
      image: iOSToDolist_Snapshot,
      title: "ToDoList",
      description:
        "ToDoList is an iPhone application using Swift and SwiftUI. It incorporated Firebase for cloud-based data storage and user authentication system.",
      github: "https://github.com/SherryFang1207/ToDoListIOSApp",
    },
  ];

  return (
    <Section
      title="Portfolio Projects📃"
      subtitle="Here are my recent projects I have been working on, including both web-based and iOS mobile apps. All project codes are open-source and available online. Feel free to take a look at the github repo and view the demo app!"
    >
      {/* <div className="mb-10 -mt-5 hidden xl:block">
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
      </div> */}
      {/* Web Application Cards */}
      <div className="grid gap-8 lg:gap-14 xl:grid-cols-2">
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
        {iOS_project.map(({ id, image, title, description, github, demo }) => (
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
                {/* <a
                  href={demo}
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a> */}
              </div>
            </div>
          </div>
        ))}
        {/* {projects.map(({ id, image, title, description, github, demo }) => (
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
        ))} */}
      </div>
    </Section>
  );
};
