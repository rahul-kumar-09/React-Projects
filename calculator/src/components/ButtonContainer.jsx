import React from "react";
import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    ".",
    "9",
    "=",
    "0",
  ];
  return (
    <div className={style.ButtonContainer}>
      {buttonName.map((btn) => (
        <button className={style.button} onClick={() => onButtonClick(btn)}>{btn}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
