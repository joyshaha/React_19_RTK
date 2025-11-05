import React from "react";
import Tag from "./Tag";
import { useSelector, useDispatch } from "react-redux";
import { fetchTags } from "../../features/videos/tagsSlice";
import { useEffect } from "react";
import Loading from "../Loading"; 

function Tags() {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );
  console.log(tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  if (!isLoading && !isError && tags?.length === 0)
    content = (
      <div className="text-center text-2xl font-bold">No tags found</div>
    );
  if (!isLoading && !isError && tags?.length > 0)
    content = tags.map((tag) => <Tag key={tag._id} tag={tag} />);

  return (
    <section className="flex flex-wrap justify-right items-center gap-2 border-b border-gray-300 pb-4">
      {content}
    </section>
  );
}

export default Tags;
