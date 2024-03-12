import React, { useState } from "react";
import "./style.css";
const Background_changer = () => {
  const [color, setColor] = useState("#fff");

  const changeColor = (newcolor) => {
    setColor(newcolor);
    document.body.style.backgroundColor = newcolor;
  };

  return (
    <div className="buttons">
      <button
        className="red"
        onClick={() => {
          changeColor("red");
        }}
      >
        red
      </button>
      <button
        className="yellow"
        onClick={() => {
          changeColor("yellow");
        }}
      >
        yellow
      </button>
      <button
        className="black"
        onClick={() => {
          changeColor("black");
        }}
      >
        black
      </button>
      <button
        className="purple"
        onClick={() => {
          changeColor("purple");
        }}
      >
        purple
      </button>
      <button
        className="green"
        onClick={() => {
          changeColor("green");
        }}
      >
        green
      </button>
      <button
        className="blue"
        onClick={() => {
          changeColor("blue");
        }}
      >
        blue
      </button>
      <button
        className="default"
        onClick={() => {
          changeColor("#fff");
        }}
      >
        default
      </button>
    </div>
  );
};

export default Background_changer;
