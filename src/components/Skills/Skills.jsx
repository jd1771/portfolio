import React from "react";
import data from "./data";
import Card from "./Card";
const Skills = () => {
  const skills = data.map((skill) => {
    return <Card key={skill.id} skill={skill.skill} />;
  });

  return (
    <div className="container mx-auto mt-10 px-5 py-10" id="skills">
      <div className="mb-20 text-center">
        <h1 className="title-font mb-4 text-3xl font-medium text-cyan sm:text-4xl">
          Skills &amp; Technologies
        </h1>
        <p className="text-md mx-auto leading-relaxed text-white md:text-xl lg:w-3/4 xl:w-2/4">
          A showcase of my skills and technological expertise, highlighting my
          the range of technical skills I possess, from programming languages
          and frameworks to software applications and database systems.
        </p>
      </div>
      <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
