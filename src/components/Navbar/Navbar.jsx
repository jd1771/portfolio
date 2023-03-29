import { React, useState } from "react";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { BsBackspace } from "react-icons/Bs";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const openResume = () => {
    window.open("/public/assets/Resume.pdf", "_blank");
  };

  return (
    <nav className="relative mb-3 flex flex-wrap items-center justify-between p-6 text-white">
      <div className="cursor-pointer rounded-sm border-2 border-white p-2 text-center">
        <h1 className="text-[1.5rem]">JD</h1>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <ul className="flex list-none flex-row p-2">
          <li className="m-3 cursor-pointer text-lg delay-75 hover:text-moonstone">
            <Link to="hero" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg delay-75 hover:text-moonstone">
            <Link to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg delay-75 hover:text-moonstone">
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg delay-75 hover:text-moonstone">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="ml-10 rounded-md border border-cyan p-2 outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600"
          onClick={openResume}
        >
          Resume
        </button>
      </div>

      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 z-30 flex h-full w-1/2 flex-col items-center justify-center bg-black duration-300 ease-in-out md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex list-none flex-col items-center justify-center p-2 text-center">
          <li className="m-3 cursor-pointer text-lg">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileNav(!mobileNav)}
            >
              About
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileNav(!mobileNav)}
            >
              Projects
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileNav(!mobileNav)}
            >
              Skills
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMobileNav(!mobileNav)}
            >
              Contact
            </Link>
          </li>
          <li className="m-3 cursor-pointer text-lg" onClick={openResume}>
            {" "}
            Resume
          </li>
          <li className="m-3  cursor-pointer">
            <BsBackspace size={30} onClick={() => setMobileNav(!mobileNav)} />
          </li>
        </ul>
      </div>
      <a
        className="block cursor-pointer md:hidden"
        onClick={() => setMobileNav(!mobileNav)}
      >
        {!mobileNav && <BiMenuAltRight size={40} />}
      </a>
    </nav>
  );
};

export default Navbar;
