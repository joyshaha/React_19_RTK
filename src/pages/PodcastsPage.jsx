import React from "react";
import Podcasts from "../components/Podcast/Podcasts";
import Tags from "../components/Video/Tags";
import { Link } from "react-router-dom";

function PodcastsPage() {
  return (
    <section className="flex flex-col gap-4 w-full mx-auto px-4">
      <Link to="/podcasts/add" className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600 self-end">
        {" "}
        + Add Podcast
      </Link>
      <h1 className="text-2xl font-semibold">All Podcasts</h1>
      <div className="grid grid-cols gap-4 ">
        <Podcasts />
      </div>
    </section>
  );
}

export default PodcastsPage;
