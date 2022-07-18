import React from "react";
import TypeItem from "../typeItem/TypeItem";
import "./pkcard.css";

export default function PkCard(props) {
  return (
    <div className="pokemonCard">
      <img
        className="pokemonImage"
        src={
          props.img ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWUrr3Fa-yOIjDLQQBzL2Reve4vFLvTODVg&usqp=CAU"
        }
        alt="pokemonImg.png"
      />
      <h3 className="pokemonName">{props.name || "?????"}</h3>
      {props.types && (
        <ul className="typeList">
          {props.types.map((t) => {
            return (
              <TypeItem
                className="typeItem"
                key={t.type.name}
                name={t.type.name}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
