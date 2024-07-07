import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import craft from "../assets/craft2.png";
import job from "../assets/job2.png";
import survey from "../assets/survey1.png";

const projects = [
  {
    img: craft,
    title: "EcoArtisan",
    description:
      "Interactive User Experience: Enhances user interaction through dynamic data loading and protected routes.",
    Feature:
      "This React project is a web application for managing and viewing art and craft items. It features a **Home Page** and **All Art & Craft Page** for displaying items fetched from an API. Users can **Add Craft Items**, view their own items on **My Art & Craft**, see **Single Item Details**, and **Update Data** for specific items. Authentication is handled through **Log In** and **Register** pages, with protected routes for authenticated users. An **Error Page** handles routing errors, and the project uses react-router-dom for routing, with an AuthProvider for managing user authentication context",
    Tools: "REACT,TAILWIND CSS, DAISY UI MONGODB",
    links: {
      Live: "https://b9a10-assignment-ccb90.web.app/",
      github: "https://github.com/mahtabulhoque/B9A10-pro-Client-site",
    },
  },
  {
    img: job,
    title: "JobQuestHub",
    description: "UI for frontend development using React",
    Feature:
      "This React project focuses on job management with the following features:**Job Listings**: Displays all available jobs and allows users to view job details.**User Authentication**: Provides secure login and registration functionality.**Data Management**: Uses React Query for efficient data fetching and caching.**CRUD Operations**: Enables users to add, update, and view their own job listings.**Error Handling**: Includes an error page for managing routing and data fetching errors.",
    Tools: "REACT,TAILWIND CSS, DAISY UI MONGODB",
    links: {
      Live: "https://b9a11-assignment-748f9.web.app/",
      github: "https://github.com/mahtabulhoque/B9A11-Pro-Client-Site",
    },
  },
  {
    img: survey,
    title: "Pro-Survey",
    description: "UI for frontend development using React",
    Feature:
      "Key features you might find in such an application include:1.Components: Modular UI elements (like buttons, forms, etc.) that can be reused throughout the application.2.State Management: Utilizing React's state management (via hooks like useState or useContext) to handle component-specific data.3.API Integration: Connecting to backend APIs to fetch and send data, enabling real-time updates and interactions.4.Routing: Using React Router to handle navigation between different sections or views of the application, maintaining a single-page application feel.",
    Tools: "REACT, TAILWIND CSS, DAISYUI,  MONGODB",
    links: {
      Live: "https://b9a12-assignment-project.web.app",
      github: "https://github.com/mahtabulhoque/B9A12-Pro-Client-Site",
    },
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="text-gray-200 text-3xl font-bold mb-10 text-center">
        MY PROJECTS
      </h2>

      <div className="relative flex flex-col md:flex-row">
        <div className="glass p-6 w-full border-2 md:max-w-[600px] mx-auto">
          <div className="w-full h-80 md:h-auto">
            <img
              src={projects[currentProject].img}
              alt={projects[currentProject].title}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          <p className="text-gray-200 my-4">
            DESCRIPTION :{" "}
            {showFullDescription
              ? projects[currentProject].description
              : projects[currentProject].description.slice(0, 150) + "..."}
            {showFullDescription ? (
              <button
                onClick={toggleDescription}
                className="ml-2 text-blue-500 hover:underline focus:outline-none"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={toggleDescription}
                className="ml-2 text-blue-500 hover:underline focus:outline-none"
              >
                Read More
              </button>
            )}
          </p>
          {showFullDescription && (
            <>
              <p className="text-gray-200 my-4">
                FEATURE : {projects[currentProject].Feature}
              </p>
              <p className="text-gray-200 my-4">
                TOOLS : {projects[currentProject].Tools}
              </p>
            </>
          )}

          <div className="flex space-x-4">
            <a
              href={projects[currentProject].links.Live}
              className="px-4 py-2 bg-green-600 text-gray-100 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              Live Link
            </a>
            <a
              href={projects[currentProject].links.github}
              className="px-4 py-2 bg-blue-700 text-blue-100 rounded-lg hover:bg-black transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>

        <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
                currentProject === index ? "bg-slate-900" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
