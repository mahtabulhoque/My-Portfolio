import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contacts = () => {
  return (
   <div>
       <h2
        className="text-gray-200 text-3xl font-bold mb-10 text-center"
      >
        CONTACTS
      </h2>
     <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="Contact"
    >
        
      <div>
        <ul className="my-auto pr-6">
          <li className="flex">
            <AiFillLinkedin className="w-[70px] h-auto text-gray-600"></AiFillLinkedin>

            <AiFillGithub className="w-[70px] h-auto text-gray-600"></AiFillGithub>
            <div className="m-5">
              <h3 className="text-lg font-bold text-gray-200">Get In Touch</h3>
              <p className="text-white">Mobile : +8801615099376</p>
              <p className="text-white">Email : mahach@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>

     <form className="max-w-6xl p-5 md:p-12" id="form">
        <input
        type="text"
        id="name"
        placeholder="Your Name"
        name="name"
        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
        type="email"
        id="email"
        placeholder="Your Email"
        name="email"
        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
         name="textarea"
         id="textarea"
         cols='30'
         rows='4'
         placeholder="Your Massage"
         className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        
        />
        <button type="submit" className="w-full py-3 rounded-md border text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#0e85b4] via-[#083d47] to-[#117583] ">Send Massage</button>

     </form>

    </div>
   </div>
  );
};

export default Contacts;
