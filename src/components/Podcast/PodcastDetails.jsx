import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetPodcastQuery,
  useDeletePodcastMutation,
} from "../../features/api/apiSlice";
import Loading from "../loading";
import { Link, useNavigate } from "react-router-dom";

function PodcastDetails() {
  const { id } = useParams();
  const [reload, setReload] = useState(false);
  const {
    data: podcast,
    isLoading,
    isError,
    error,
    refetch, // refetch the query
  } = useGetPodcastQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !reload,
  });
  console.log(podcast);
  const [
    deletePodcast,
    {
      isLoading: isLoadingDeleting,
      isError: isErrorDeleting,
      error: errorDeleting,
      isSuccess: isSuccessDeleting,
    },
  ] = useDeletePodcastMutation();

  const navigate = useNavigate();

  // advance rtk query options
  // skip: true means the query will not be executed until the skip is false
  const handleReload = () => {
    console.log("Reloading...");
    setReload(!reload);
  };

  // handle delete of podcast
  const handleDelete = () => {
    console.log("Deleting...");
    deletePodcast(id);
  };

  // use effect to navigate to podcasts page after successful deletion
  useEffect(() => {
    if (isSuccessDeleting) {
      console.log("Podcast deleted successfully");
      navigate("/podcasts");
    }
  }, [isSuccessDeleting, navigate]);

  // decide what to render
  let content = null;
  if (isLoading || isLoadingDeleting) content = <Loading />;
  if ((!isLoading && isError) || (isErrorDeleting && errorDeleting))
    content = (
      <div className="text-center text-lg text-red-500">
        Error: {error || errorDeleting}
      </div>
    );
  if (!isLoading && !isError && !podcast?._id)
    content = (
      <div className="text-center text-2xl font-bold">No podcast found</div>
    );
  if (!isLoading && !isError && podcast?._id)
    content = (
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Podcast Details</h1>
        <h1 className="text-lg text-size-sm font-semibold">
          ID: {podcast._id}
        </h1>
        <a
          className="max-w-[50%] object-cover rounded-lg mb-2 w-full"
          href={podcast.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://picsum.photos/200/200"
            alt={podcast.title}
            className="w-full h-full object-cover rounded-lg mb-2"
          />
        </a>
        <h1
          className="text-lg text-size-lg font-semibold cursor-pointer"
          onClick={refetch}
        >
          {podcast.title}
        </h1>
        <p className="text-sm text-gray-500">{podcast.description}</p>
        <p className="text-sm text-gray-500">
          {new Date(podcast.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex gap-4">
          <Link
            to={`/podcasts/edit/${podcast._id}`}
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2 border border-blue-500 rounded-md p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </Link>
          <button
            disabled={isLoadingDeleting}
            className=" text-red-500 rounded-md cursor-pointer hover:text-red-600 flex items-center gap-2 border border-red-500 p-2"
            onClick={handleDelete}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    );
  return (
    <>
      <div className="flex flex-col gap-4 w-full mx-auto">
        <div className="flex justify-between items-center">
          <Link
            to="/podcasts"
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
          <button
            disabled={isLoading}
            className="bg-gray-200 text-black-200 hover:text-blue-600 flex items-center gap-2 border border-gray-500 rounded-md p-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            onClick={handleReload}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reload
          </button>
        </div>
        {content}
      </div>
    </>
  );
}

export default PodcastDetails;
