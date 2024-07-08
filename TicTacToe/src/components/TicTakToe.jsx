import React, { useState } from "react";
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";

const data = ["", "", "", "", "", "", "", "", ""];
const TicTakToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const toggle = (w, num) => {
    if (lack) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHtml = `<img src='${circle_icon}'>`;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e)=> {toggle(e,0)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,1)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e)=> {toggle(e,3)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,4)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e)=> {toggle(e,6)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,7)}}></div>
          <div className="boxes" onClick={(e)=> {toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTakToe;
