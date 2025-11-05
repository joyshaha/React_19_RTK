import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";

import Video from "./Video";
import Loading from "../Loading"; 

function Videos() {
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);
  console.log(useSelector((state) => state.filter));
  console.log(tags, search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  if (!isLoading && !isError && videos?.length === 0)
    content = (
      <div className="text-center text-2xl font-bold">No videos found</div>
    );
  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => (
      <Video key={video._id} video={video} />
    ));

  return (
    <div className="grid grid-cols-4 gap-3">
      {content}
    </div>
  );
}

export default Videos;
