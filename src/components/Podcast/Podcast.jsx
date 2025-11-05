import React from "react";
import { Link } from "react-router-dom";

function Podcast({ podcast }) {
  return (
    <div className="max-w-full mx-auto p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
      <Link
        to={`/podcast/${podcast._id}`}
        className="flex flex-col justify-center items-center gap-4 cursor-pointer"
      >
        <img
          // src={podcast.url}
          src="https://picsum.photos/200/200"
          alt={podcast.title}
          className="w-full h-full object-cover rounded-lg mb-2"
        />
        <h1 className="text-base font-semibold">{podcast.title}</h1>
        <p className="text-sm text-gray-500 line-clamp-2">{podcast.description}</p>
      </Link>
    </div>
  );
}

export default Podcast;
