import React from "react";
import { AiFillGithub } from "react-icons/Ai";
import { TbDirectionSign } from "react-icons/Tb";

const Card = (props) => {
  return (
    <div className="transform-gpu rounded-md border border-white text-white transition hover:scale-105">
      <img
        alt="Project Cover"
        src={props.img}
        className="object-fit h-64 w-full rounded-t-lg sm:h-80 sm:text-xl"
      />
      <div className="pl-2">
        <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
          {props.title}
        </h3>

        <p className="mt-2 max-w-sm text-white">{props.description}</p>
      </div>

      <div className="mb-2 flex items-center justify-center gap-5">
        {props.github && (
          <AiFillGithub
            size={30}
            onClick={() => window.open(props.github, "_blank")}
            cursor="pointer"
          />
        )}
        {props.deployment && (
          <TbDirectionSign
            size={30}
            onClick={() => window.open(props.deployment, "_blank")}
            cursor="pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
