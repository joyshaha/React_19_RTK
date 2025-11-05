import React, { useState } from "react";
import { useEffect } from "react";
import {
  useAddPodcastMutation,
  useGetPodcastQuery,
  useUpdatePodcastMutation,
} from "../../features/api/apiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

function PodcastForm({ edit = false }) {
  const { id } = useParams();
  const [addPodcast, { data: podcast, isLoading, isError, error, isSuccess }] =
    useAddPodcastMutation();
  console.log("podcast", podcast);

  const navigate = useNavigate();

  const { data: podcastData } = useGetPodcastQuery(id, {
    skip: !edit, // skip the query if edit is false
  });

  const [
    updatePodcast,
    {
      data: updatedPodcast,
      isLoading: isLoadingUpdating,
      isError: isErrorUpdating,
      error: errorUpdating,
      isSuccess: isSuccessUpdating,
    },
  ] = useUpdatePodcastMutation();
  console.log("updatedPodcast", updatedPodcast);
  console.log("isSuccessUpdating", isSuccessUpdating);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    episodes: 0,
  });

  useEffect(() => {
    if (edit && podcastData?._id) {
      setFormData({
        title: podcastData.title,
        description: podcastData.description,
        url: podcastData.url,
        episodes: podcastData.episodes,
      });
    }
  }, [edit, podcastData]);

  console.log("formData", formData);

  // handle change in form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // reset form data after successful submission
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      url: "",
      episodes: 0,
    });
  };
  //   useEffect(() => {
  //     const resetForm = () => {
  //       setFormData({
  //         title: "",
  //         description: "",
  //         url: "",
  //         episode: 0,
  //       });
  //     };
  //     if (isSuccess) {
  //       resetForm();
  //     }
  //   }, [isSuccess]);

  // handle submit of form data
  const handleSubmit = (e) => {
    e.preventDefault();
    addPodcast(formData);
    resetForm();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePodcast({ id, podcast: formData });
    resetForm();
    navigate(`/podcast/${id}`);
  };

  // decide what to render
  if (isLoading || isLoadingUpdating) return <div>Loading...</div>;
  if (isErrorUpdating)
    return <div>Error: {errorUpdating.status || "Unknown error"}</div>;

  return (
    <div className="flex flex-col gap-2">
      {isError && (
        <div className="text-red-500">
          Error: {error.status || "Unknown error"}
        </div>
      )}
      <div className="flex justify-start items-center gap-2 py-2">
        {isSuccess ? (
          <div className="text-green-500 text-center py-2">
            Podcast added successfully{" "}
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
              View Podcasts
            </Link>
          </div>
        ) : (
          <Link
            to={edit ? `/podcast/${id}` : "/podcasts"}
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
            {edit ? "Back to Podcast" : "Back to Podcasts"}
          </Link>
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold py-2">
          {edit ? "Update Podcast" : "Add Podcast"}
        </h1>
        <form
          onSubmit={edit ? handleUpdate : handleSubmit}
          className="flex flex-col gap-2 space-y-2"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="episode"
              className="text-sm font-medium text-gray-700"
            >
              Episodes
            </label>
            <input
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="episodes"
              value={formData.episodes}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
            >
              {isLoading
                ? "Loading..."
                : edit
                ? "Update Podcast"
                : "Add Podcast"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PodcastForm;
