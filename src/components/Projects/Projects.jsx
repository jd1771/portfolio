import React from "react";
import Card from "./Card";
import data from "./data";

const Projects = () => {
    const cards = data.map((project) => {
        return (
            <Card
                key={project.id}
                img={project.img}
                title={project.title}
                description={project.description}
                github={project.github}
                deployment={project.deployment}
            />
        );
    });

    return (
        <div className="mx-auto w-1/2 text-white" id="projects">
            <h1 className="title-font mb-4 text-3xl font-medium text-cyan sm:text-4xl">
                Some of My Work
            </h1>
            <div className="grid-col-1 mt-10 grid gap-10 md:grid-cols-2">
                {cards}
            </div>
        </div>
    );
};

export default Projects;
