import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { image, name, code, demo, description } = props.data;
  console.log(image);
  return (
    <div className=" text-white p-4 rounded-lg">
      <div className="max-w-xs rounded">
        <img className="w-80 h-56 rounded-lg" src={image} alt="" />
        <p className="pt-2 text-white text-2xl font-bold text-left">{name}</p>
        <p className="pt-2 text-white text-sm text-justify">{description}</p>
        <div className="flex gap-4 pt-2 font-semibold">
          <Link
            to={`${code}`}
            target="_blank"
            className="px-12 py-1 rounded-md border-2 border-zinc-600"
          >
            Code
          </Link>
          <Link
            to={`${demo}`}
            target="_blank"
            className="px-12 py-1 rounded-md bg-white text-black"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
