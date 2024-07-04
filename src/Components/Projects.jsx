import { useState } from "react";
import craft from "../assets/craft.jpg";
import job from "../assets/Job.jpg";
import survey from "../assets/survey.jpg";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: craft,
    title: "EcoArtisan",
    description: "Interactive User Experience: Enhances user interaction through dynamic data loading and protected routes.",
    Feature:"This React project is a web application for managing and viewing art and craft items. It features a **Home Page** and **All Art & Craft Page** for displaying items fetched from an API. Users can **Add Craft Items**, view their own items on **My Art & Craft**, see **Single Item Details**, and **Update Data** for specific items. Authentication is handled through **Log In** and **Register** pages, with protected routes for authenticated users. An **Error Page** handles routing errors, and the project uses `react-router-dom` for routing, with an `AuthProvider` for managing user authentication context",
    Tools:'REACT,TAILWIND CSS, DAISY UI MONGODB' ,
    links:{
        Live:"https://b9a10-assignment-ccb90.web.app/",
        github:'https://github.com/mahtabulhoque/B9A10-pro-Client-site'
    }
  },
  {
    img: job,
    title: "Job-Hunting",
    description: "UI for frontend development using React",
    Feature:"This React project focuses on job management with the following features:**Job Listings**: Displays all available jobs and allows users to view job details.**User Authentication**: Provides secure login and registration functionality.**Data Management**: Uses React Query for efficient data fetching and caching.**CRUD Operations**: Enables users to add, update, and view their own job listings.**Error Handling**: Includes an error page for managing routing and data fetching errors.",
    Tools:'REACT,TAILWIND CSS, DAISY UI MONGODB' ,
    links:{
        Live:"https://b9a11-assignment-748f9.web.app/",
        github:'https://github.com/mahtabulhoque/B9A11-Pro-Client-Site'
    }
  },
  {
    img: survey,
    title: "Pro-Survey",
    description: "UI for frontend development using React",
    Feature:"Key features you might find in such an application include:1.Components: Modular UI elements (like buttons, forms, etc.) that can be reused throughout the application.2.State Management: Utilizing React's state management (via hooks like useState or useContext) to handle component-specific data.3.API Integration: Connecting to backend APIs to fetch and send data, enabling real-time updates and interactions.4.Routing: Using React Router to handle navigation between different sections or views of the application, maintaining a single-page application feel.",
    Tools:'REACT, TAILWIND CSS, DAISYUI,  MONGODB' ,
    links:{
        Live:"https://b9a12-assignment-project.web.app",
        github:'https://github.com/mahtabulhoque/B9A12-Pro-Client-Site'
    }
  },
];

const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState(0);
  return (
    <div className="max-w-[800px] mx-auto p-6 md:my-20" id="projects">
      <h2
        className="text-gray-200 text-3xl font-bold mb-10 text-center"
      >
        MY-PROJECTS
      </h2>

      <div className="relative flex flex-col md:flex-row" >
        <div className="glass p-6 w-full border-2 max-w-[600px]">

            <div className="w-full h-80">
                <img src={projects[currentProjects].img} alt={projects[currentProjects].title}className="w-full h-full object-cover rounded-lg mb-4" />
            </div>
            <p className="text-gray-200 my-4">
            DESCRIPTION : {projects[currentProjects].description}
            </p>
            <p className="text-gray-200 my-4">
            FEATURE : {projects[currentProjects].Feature} 
            </p>
            <p className="text-gray-200 my-4">
           TOOLS : {projects[currentProjects].Tools}
            </p>

            <div className="flex space-x-4">
                <a href={projects[currentProjects].links.Live} className="px-4 py-2 bg-green-600 text-gray-100 rounded-lg hover:bg-slate-700 transition duration-300">Live Link</a>
              
                <a className="px-4 py-2 bg-blue-700 text-blue-100 rounded-lg hover:bg-black transition duration-300" href={projects[currentProjects].links.github} ><AiFillGithub></AiFillGithub></a>
            </div>


        </div>

        <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
            {
             projects.map((project, index)=>(
                <li key={index} onClick={()=> setCurrentProjects(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProjects === index ? "bg-slate-900" : ""}`}>
                    {project.title}
                </li>

             ))
            }
            
        </ul>


      </div>
    </div>
  );
};

export default Projects;
