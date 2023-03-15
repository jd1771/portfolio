import React from "react";
import Card from "./Card";
import data from "./data";

const Projects = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
        github={item.github}
        deployment={item.deployment}
      />
    );
  });

  return (
    <div className="text-white">
      <div className="mx-auto w-1/2">
        <h1 className="text text-2xl font-bold text-cyan">Some of My Work</h1>
        <div className="grid-col-1 mt-10  grid gap-10 md:grid-cols-2">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Projects;
