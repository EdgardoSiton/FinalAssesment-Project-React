import React from "react";
import "../index.css";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <h1>Task List</h1>
    </div>
  );
};

export default SearchFilter;
