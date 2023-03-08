import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-auto mt-[-200px] flex h-screen w-full max-w-[600px] flex-col justify-center text-center">
        <h1 className="p-2 text-4xl font-bold text-white">
          Welcome <span>👋</span> I'm
        </h1>
        <h1 className="p-2 text-5xl font-bold text-primary">Jas Dhaul</h1>
        <p className="p-2 text-xl text-[#949494]">
          I am a{" "}
          <span className="text-white"> full-stack software developer</span>{" "}
          studying <span className="text-white">Computer Science</span> at the{" "}
          <span className="text-white">University of Victoria</span>. Scroll
          below to learn more about me.
        </p>
        <button className="mx-auto mt-4 w-[160px] rounded border border-cyan p-3 outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
