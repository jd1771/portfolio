import React from "react";

const Hero = () => {
  return (
    <div
      className="mx-auto mt-[-150px] mb-[75px] flex h-screen w-full flex-col justify-center bg-[url('/public/assets/forest.jpg')] bg-auto text-center text-white"
      id="hero"
    >
      <h1 className="p-2 text-4xl font-bold text-white">
        Welcome <span>👋</span> I'm
      </h1>
      <h1 className="p-2 text-5xl font-bold text-cyan">Jas Dhaul</h1>
      <p className="mx-auto max-w-[600px] p-2 text-xl text-[#949494]">
        I am a{" "}
        <span className="text-white"> full-stack software developer</span>{" "}
        studying <span className="text-white">Computer Science</span> at the{" "}
        <span className="text-white">University of Victoria</span>. Scroll below
        to learn more about me.
      </p>
      <button
        onClick={() => window.open("https://calendly.com/jasdhaul0", "_blank")}
        className="mx-auto mt-4 w-[160px] rounded border border-cyan p-3 outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600"
      >
        Book a meeting
      </button>
    </div>
  );
};

export default Hero;
