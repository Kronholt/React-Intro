import React from "react";
import { peppers } from "../data";

const ListItem = (props) => {
  const pepper = props.pepper;
  console.log(pepper);
  return (
    <li key={pepper.id}>
      <h2>{pepper.name}</h2>
      <img className="pepper-img" src={pepper.src} alt={pepper.name} />
    </li>
  );
};

export const List = () => {
  return (
    <ul>
      {peppers.map((pepper) => (
        <ListItem pepper={pepper} />
      ))}
    </ul>
  );
};
