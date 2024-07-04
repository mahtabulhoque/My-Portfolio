import photo from "../assets/file2.png";
const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-10 place-items-center"
      id="about"
    >
      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-r-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={photo}
            alt="photo"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">ABOUT ME</h2>
        <p className="text-gray-300 mb-4">
          I am Mahtabul Hoque Chowdhury, a passionate web developer skilled in
          both front-end and back-end technologies. I have expertise in HTML,
          CSS, JavaScript, and popular frameworks like React. I am also
          experienced in server-side development with Node.js and Express, and
          proficient in database management with MongoDB. I am committed to
          creating user-friendly, responsive, and efficient web applications.
          Enthusiastic about learning new technologies and continuously
          improving my coding skills, I am currently focused on mastering Typescript &
          Next.js to enhance my development toolkit.
        </p>
      </div>
    </div>
  );
};

export default About;
