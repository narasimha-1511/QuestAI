import React from "react";
import NoProject from "../../assets/home/NoProjects.svg";

const NoProjects = ({ children }) => {
  return (
    <div className="h-full mt-10">
      <div className="flex flex-col items-center max-w-[78vh] mx-auto">
        <h1 className="text-5xl font-bold text-purple-600">
          {" "}
          Create a New Project
        </h1>
        <div className="flex justify-center items-center mt-8">
          <img src={NoProject} alt="No Project" className="w-[45vh] h-[45vh]" />
        </div>
        <p className=" text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {children}
      </div>
    </div>
  );
};

export default NoProjects;
