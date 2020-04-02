import React from "react";

const SinglePerson = ({ person, choosePerson }) => {
  const { name, age, position } = person;
  return (
    <div className="preview-row" onClick={() => choosePerson(name)}>
      <p class="preview-info">
        <span>{name}</span>
        <span class="preview-age">{age} years old</span>
      </p>
      <p>{position}</p>
    </div>
  );
};

export default SinglePerson;