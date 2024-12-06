import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-24 absolute z-10 text-white w-screen h-screen bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-lg leading-relaxed mb-6 w-1/2 drop-shadow-md">
        {overview}
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-black font-semibold py-2 px-6  rounded-md shadow-lg hover:bg-gray-400 transition-all duration-300">
          ▶️ Play
        </button>
        <button className="bg-gray-800 text-white font-semibold py-2 px-6 bg-opacity-60 rounded-md shadow-lg hover:bg-gray-700 transition-all duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
