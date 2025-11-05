import React from "react";
import Tags from "../components/Video/Tags";
import Videos from "../components/Video/Videos";
import Search from "../components/Video/Search";

function VideosPage() {
  return (
    <section className="flex flex-col gap-4 max-w-full mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold">All Videos</h1>
        <Search />
      </div>
      <div className="flex flex-col gap-4">
        <Tags />
      </div>
      <div className="grid grid-cols gap-4 ">
        <Videos />
      </div>
    </section>
  );
}

export default VideosPage;
