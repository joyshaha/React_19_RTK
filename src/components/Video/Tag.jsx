import React from "react";
import { useDispatch } from "react-redux";
import { tagSelected, tagRemoved } from "../../features/videos/filterSlice";
import { useSelector } from "react-redux";

function Tag({ tag = {} }) {
  const { type } = tag;
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(type) ? true : false;

  const style = isSelected
    ? "bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
    : "bg-gray-200 text-gray-800 px-2 py-1 rounded-full hover:bg-gray-300 cursor-pointer";

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(type));
    } else {
      dispatch(tagSelected(type));
    }
  };

  return (
    <div className={style} onClick={handleSelect}>
      {type}
    </div>
  );
}

export default Tag;
