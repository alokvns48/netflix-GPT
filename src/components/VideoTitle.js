import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-2 md:my-0">
        <button className=" py-1 md:py-3 px-3 md:px-6 text-lg md:text-xl bg-white text-black font-bold  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block py-3 px-6 text-xl bg-gray-400 font-bold bg-opacity-50  rounded-lg  mx-2">
          More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
