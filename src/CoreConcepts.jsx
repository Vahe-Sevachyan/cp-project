import React from "react";

const CoreConcepts = (props) => {
  return (
    <>
      <li>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    </>
  );
};

export default CoreConcepts;
