import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1400px] mx-auto h-24">
      <a href="">MAHTAB</a>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li>
          <Link>About</Link>
        </li>
      </ul>

      <div>
        {nav ? (
          <AiOutlineClose size={30}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={30}></AiOutlineMenu>
        )}
      </div>

      <div>
        <ul>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
