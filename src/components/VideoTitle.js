import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className=" absolute pt-60 px-6 md:px-24 text-white w-screen h-screen bg-gradient-to-r from-black z-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        {title}
      </h1>
      <p className="hidden sm:block sm:text-[0.8rem] md:text-lg leading-relaxed mb-6  lg:w-1/2 md:w-full drop-shadow-md">
        {overview}
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link to={`/browse/${id}`}>
          <button className="bg-white text-black font-semibold py-2 px-6  rounded-md shadow-lg hover:bg-gray-400 transition-all duration-300">
            ▶️ Play
          </button>
        </Link>
        <Link to={`/browse/${id}`}>
          <button className="bg-gray-800 text-white font-semibold py-2 px-6 bg-opacity-60 rounded-md shadow-lg hover:bg-gray-700 transition-all duration-300">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
// hidden md:block
