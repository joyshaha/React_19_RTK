import React from "react";
import { Link } from "react-router-dom";

function Video({ video = {} }) {
  console.log(video);
  const { name, _id: id, completed } = video;
  return (
    <div className="max-w-full mx-auto p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
      <Link to={`/video/${id}`}
        className="flex flex-col justify-center items-center gap-4 cursor-pointer"
      >
        <img
          className="w-full h-full object-cover rounded-lg mb-2"
          src="https://picsum.photos/200/200"
          alt="video"
        />
        <div className="flex flex-col gap-2">
          <h5 className="text-base font-semibold">
            {name}
          </h5>
          <p className="text-sm text-gray-500">
            {completed.toString()}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Video;
