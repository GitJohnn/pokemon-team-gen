import React from "react";
import "./typeItem.css";

export default function TypeItem(props) {
  let buttonStyle = {
    backgroundColor: "white",
    color: "black",
  };
  switch (props.name) {
    case "normal":
      buttonStyle.backgroundColor = "#bcbdaf";
      buttonStyle.color = "white";
      break;
    case "fighting":
      buttonStyle.backgroundColor = "#a65645";
      buttonStyle.color = "white";
      break;
    case "flying":
      buttonStyle.backgroundColor = "#7aa4ff";
      buttonStyle.color = "white";
      break;
    case "poison":
      buttonStyle.backgroundColor = "#a95ea1";
      buttonStyle.color = "white";
      break;
    case "ground":
      buttonStyle.backgroundColor = "#cfbd73";
      buttonStyle.color = "white";
      break;
    case "rock":
      buttonStyle.backgroundColor = "#cebc72";
      buttonStyle.color = "white";
      break;
    case "bug":
      buttonStyle.backgroundColor = "#c3d21f";
      buttonStyle.color = "white";
      break;
    case "ghost":
      buttonStyle.backgroundColor = "#7975d6";
      buttonStyle.color = "white";
      break;
    case "steel":
      buttonStyle.backgroundColor = "#c4c1db";
      buttonStyle.color = "white";
      break;
    case "fire":
      buttonStyle.backgroundColor = "#fb5643";
      buttonStyle.color = "white";
      break;
    case "water":
      buttonStyle.backgroundColor = "#55aefe";
      buttonStyle.color = "white";
      break;
    case "grass":
      buttonStyle.backgroundColor = "#8cd851";
      buttonStyle.color = "white";
      break;
    case "electric":
      buttonStyle.backgroundColor = "#fce53d";
      buttonStyle.color = "white";
      break;
    case "psychic":
      buttonStyle.backgroundColor = "#fa65b6";
      buttonStyle.color = "white";
      break;
    case "ice":
      buttonStyle.backgroundColor = "#95f1ff";
      buttonStyle.color = "white";
      break;
    case "dragon":
      buttonStyle.backgroundColor = "#8a75fe";
      buttonStyle.color = "white";
      break;
    case "dark":
      buttonStyle.backgroundColor = "#8b6653";
      buttonStyle.color = "white";
      break;
    case "fairy":
      buttonStyle.backgroundColor = "#8b6653";
      buttonStyle.color = "white";
      break;
    default:
  }

  return (
    <li className="typeItem" style={buttonStyle}>
      <b>{props.name.toUpperCase()}</b>
    </li>
  );
}
