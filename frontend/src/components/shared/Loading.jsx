import React from "react";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700">
      <div className="text-center">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
