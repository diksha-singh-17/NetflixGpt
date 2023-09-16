import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-24 absolute w-screen aspect-video bg-gradient-to-r from-black pt-20% text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-2">{overview}</p>
      <div className="">
        <button className=" bg-white px-12  text-black text-lg p-4 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" bg-gray-500 px-12 mx-2 text-white text-lg p-4 opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
