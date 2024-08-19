import React from "react";
import QuesLogo from "../../assets/QuesLogo_White.svg";
import wavePattern from "../../assets/LoginDesgin.svg";

const Design = () => {
  return (
    <div
      className="w-[60%] object-contain bg-purple-600 opacity-76 h-full w-full"
      style={{ backgroundImage: `url(${wavePattern})` }}
    >
      <div className="mt-32 ml-12">
        <img src={QuesLogo} alt="Ques.AI" />
        <h1 className="text-white mt-9 text-8xl font-thin">
          Your podcast <br />
          will no longer <br />
          be just a hobby.
        </h1>
        <p className="text-2xl mt-9 font-bold text-white">
          Supercharge Your Distribution <br /> using our AI assistant!
        </p>
      </div>
    </div>
  );
};

export default Design;
