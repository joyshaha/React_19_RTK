import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/videos/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

function Search() {
  const { search: searchTerm } = useSelector((state) => state.filter);
  const [search, setSearch] = useState(searchTerm);
  const dispatch = useDispatch();

  const match = useMatch("/videos");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(search));
    // setSearch("");

    // if user is on the home page, redirect to the home page
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        className="p-2 border border-gray-300 rounded-md"
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
}

export default Search;
