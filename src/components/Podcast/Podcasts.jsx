import React from "react";
import { useGetPodcastsQuery } from "../../features/podcasts/podcastApi";
import Loading from "../Loading"; 
import Podcast from "./Podcast";

function Podcasts() {
  const {
    data: podcasts,
    isLoading,
    isError,
    error,
  } = useGetPodcastsQuery(undefined, { pollingInterval: 50000000 }); // pollingInterval: 50000000 means the query will be polled every 5 minutes
  console.log(isLoading, isError, error);
  console.log(podcasts);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className="text-center text-lg text-red-500">
        Error: {error ? error.status : "Unknown error"}
      </div>
    );
  if (!isLoading && !isError && podcasts?.length === 0)
    content = (
      <div className="text-center text-2xl font-bold">No podcasts found</div>
    );
  if (!isLoading && !isError && podcasts?.length > 0)
    content = podcasts.map((podcast) => (
      <Podcast key={podcast._id} podcast={podcast} />
    ));

  return <div className="grid grid-cols-4 gap-3">{content}</div>;
}

export default Podcasts;
