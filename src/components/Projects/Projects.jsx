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
      />
    );
  });

  return (
    <div className="text-white">
      <div className="mx-auto w-1/2">
        <h1 className="text text-2xl font-bold text-cyan">Some of My Work</h1>
        <div className="relative mt-10 grid grid-cols-2 gap-10">{cards}</div>
      </div>
    </div>
  );
};

export default Projects;
