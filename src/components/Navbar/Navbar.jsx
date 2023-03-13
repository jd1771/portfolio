import { React, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="relative mb-3 flex flex-wrap items-center justify-between p-6 text-white">
      <div className="cursor-pointer rounded-sm border-2 border-white p-2 text-center">
        <h1>JD</h1>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <ul className="flex list-none flex-row p-2">
          <li className="link-underline m-3 cursor-pointer text-lg underline-offset-4">
            About
          </li>
          <li className="link-underline m-3 cursor-pointer text-lg underline-offset-4">
            Projects
          </li>
          <li className="link-underline m-3 cursor-pointer text-lg underline-offset-4">
            Skills
          </li>
          <li className="link-underline m-3 cursor-pointer text-lg underline-offset-4">
            Contact
          </li>
        </ul>
        <button className="ml-10 rounded-md border border-cyan p-2 outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600">
          Resume
        </button>
      </div>

      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 flex h-full w-1/2 flex-col items-center justify-center bg-black duration-300 ease-in-out md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex list-none flex-col p-2 text-center">
          <li className="m-3 cursor-pointer text-lg">About</li>
          <li className="m-3 cursor-pointer text-lg">Experience</li>
          <li className="m-3 cursor-pointer text-lg">Projects</li>
          <li className="m-3 cursor-pointer text-lg">Skills</li>
          <li className="m-3 cursor-pointer text-lg">Contact</li>
        </ul>
        <button className="mb-10 rounded-md border border-cyan p-2 outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600">
          Resume
        </button>
      </div>
      <a
        className="block cursor-pointer md:hidden"
        onClick={() => setMobileNav(!mobileNav)}
      >
        {mobileNav ? <RxCross1 size={40} /> : <BiMenuAltRight size={40} />}
      </a>
    </nav>
  );
};

export default Navbar;
