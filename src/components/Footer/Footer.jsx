import React from "react";
import { BsLinkedin } from "react-icons/Bs";
import { AiFillGithub } from "react-icons/Ai";

const Footer = () => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-y-4 text-white">
      <p className="text-md">Made with ❤️ by Jas Dhaul</p>
      <div className="flex items-center justify-center gap-x-5">
        <a
          href="https://www.linkedin.com/in/jas-dhaul/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={30} />
        </a>
        <a href="https://github.com/jd1771" target="_blank" rel="noreferrer">
          <AiFillGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
