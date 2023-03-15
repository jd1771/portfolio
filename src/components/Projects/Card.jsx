import React from "react";

const Card = (props) => {
  return (
    <div className="block text-white">
      <img
        alt="Project Cover"
        src={props.img}
        className="h-64 w-full object-cover sm:h-80 sm:text-xl"
      />
      <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
        {props.title}
      </h3>

      <p className="mt-2 max-w-sm text-white">{props.description}</p>
    </div>
  );
};

export default Card;
