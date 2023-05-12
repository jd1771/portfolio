import React from "react";
import { AiFillCheckCircle } from "react-icons/Ai";

const Card = (props) => {
    return (
        <div key={props.id} className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-800 p-4">
                <AiFillCheckCircle className="mr-4 h-6 w-6 flex-shrink-0 text-green-400" />
                <span className="title-font font-medium text-white">
                    {props.skill}
                </span>
            </div>
        </div>
    );
};

export default Card;
