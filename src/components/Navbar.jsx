import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-primary p-6 text-lg text-secondary">
      <div className="cursor-pointer rounded-sm border-2 p-2 text-center">
        <h1>JD</h1>
      </div>
      <ul className="flex p-2">
        <li className="m-3 cursor-pointer text-lg underline-offset-4 hover:underline">
          About
        </li>
        <li className="m-3 cursor-pointer text-lg underline-offset-4 hover:underline">
          Experience
        </li>
        <li className="m-3 cursor-pointer text-lg underline-offset-4 hover:underline">
          Projects
        </li>
        <li className="m-3 cursor-pointer text-lg underline-offset-4 hover:underline">
          Skills
        </li>
        <li className="m-3 cursor-pointer text-lg underline-offset-4 hover:underline">
          Contact
        </li>
      </ul>
      <button className="rounded-sm border-2 p-2">Resume</button>
    </nav>
  );
};

export default Navbar;
