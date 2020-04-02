import React from "react";
import SinglePerson from "./SinglePerson";
//stateless component to render preview results
const SearchPreview = ({ data, choosePerson }) => {
  return (
    <div className="search-preview">
      {
        data.map((person, index) => <SinglePerson person={person} key={index} choosePerson={choosePerson} />)
      }
    </div>
  );
};

export default SearchPreview;