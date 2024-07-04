
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Swal from "sweetalert2";

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validate form fields
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    formData.append("access_key", "cfcc00ec-53ab-4760-9ebe-faae45d338b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        event.target.reset(); // Clear form fields
      } else {
        Swal.fire({
          title: 'Error!',
          text: res.message || 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <h2 className="text-gray-200 text-3xl font-bold mb-10 text-center">
        CONTACTS
      </h2>
      <div
        className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
        id="Contact"
      >
        <div>
          <ul className="my-auto pr-6">
            <li className="flex">
              <AiFillLinkedin className="w-[70px] h-auto text-gray-600" />
              <AiFillGithub className="w-[70px] h-auto text-gray-600" />
              <div className="m-5">
                <h3 className="text-lg font-bold text-gray-200">Get In Touch</h3>
                <p className="text-white">Mobile: +8801615099376</p>
                <p className="text-white">Email: mahach@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="max-w-6xl p-5 md:p-12" id="form">
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
            name="message"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md border text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#0e85b4] via-[#083d47] to-[#117583]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
