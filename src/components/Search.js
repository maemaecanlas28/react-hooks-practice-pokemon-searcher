import React from "react";

function Search({ searchInput, setSearchInput }) {

  function handleSearchChange (event) {
    setSearchInput(event.target.value)
  }

  return (
    <div className="ui search" onChange={handleSearchChange}>
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
