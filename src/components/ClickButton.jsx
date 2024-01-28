import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, reset } from "../store/counterSlice";

const ClickButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
    createBubble();

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const createBubble = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * window.innerWidth}px`;

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  };

  const handleReset = () => {
    dispatch(reset());
    document.body.style.backgroundColor = "#0fd49f";
  };

  return (
    <div className="div_btn">
      <button className="glow-on-hover" onClick={handleClick}>
        Click to count clicks
      </button>
      <button className="glow-on-hover" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default ClickButton;
