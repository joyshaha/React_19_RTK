import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/videos/videoSlice";
import { useEffect } from "react";
import Loading from "../loading";

function VideoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  if (!isLoading && !isError && !video?._id)
    content = (
      <div className="text-center text-2xl font-bold">No video found</div>
    );
  if (!isLoading && !isError && video?._id)
    content = (
      <>
        <div className="flex flex-col gap-4 w-full mx-auto">
          <h1 className="text-2xl font-bold">Video Details</h1>
          <img
            className="w-full h-full object-cover rounded-md mb-2"
            src="https://picsum.photos/200/200"
            alt="video"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-size-sm font-semibold">{video.name}</h1>
            <p className="text-sm text-gray-500">
              {video.completed.toString()}
            </p>
          </div>
        </div>
        <div className="w-1/3 mt-4 flex flex-col gap-2">
          <h1 className="text-xl font-extralight text-gray-500">
            Related Videos
          </h1>
          <div className="flex justify-between items-center gap-4">
            <img
              className="w-full h-full object-cover rounded-[50%] mb-2"
              src="https://picsum.photos/200/200"
              alt="video"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-black-500">{video.name}</h1>
              <p className="text-sm text-gray-500">
                {video.completed.toString()}
              </p>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-48  w-full mx-auto">
      {content}
    </div>
  );
}

export default VideoDetails;
