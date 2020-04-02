import React from "react";

const SearchBar = ({ inputValue, ignoreCase, updateField, updateInput }) => {

  const inputChange = function(e) {
    const value = e.target.value;
    updateField("keyword", value);
    updateInput(value);
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        placeholder="Search"
        value={inputValue}
        onChange={inputChange}
      />
      <input 
        className="search-bar__checkbox"
        type="checkbox" 
        value={ignoreCase} 
        onChange={e => updateField("ignoreCase", e.target.checked)} 
      />ignoreCase
    </div>
  );
};

export default SearchBar;