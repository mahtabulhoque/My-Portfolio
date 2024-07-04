import React from "react";
import { motion } from "framer-motion";
import school from '../assets/school.jpg';
import collage from '../assets/collage.jpg';
import university from '../assets/university.png';

const educations = [
  {
    img: school,
    School: 'Natmura Pukuria High School',
    Group: 'Science',
    Passed: '2017',
  },
  {
    img: collage,
    School: 'Islamia Collage, Chittagong',
    Group: 'Science',
    Passed: '2019',
  },
  {
    img: university,
    School: 'University Of Chittagong',
    Group: 'Science',
    Passed: 'Still 4th Year',
  },
];

const Education = () => {
  return (
    <div className="max-w-[1300px] mx-auto glass p-5" id="educations">
      <h2 className="text-gray-200 text-3xl font-bold mb-6 text-center">
        EDUCATION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educations.map((education, index) => (
          <motion.div
            key={index}
            className="card bg-base-100 shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <figure className="px-10 pt-10">
              <img
                src={education.img}
                alt={education.School}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{education.School}</h2>
              <p>
                Group: {education.Group} | Passed: {education.Passed}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
