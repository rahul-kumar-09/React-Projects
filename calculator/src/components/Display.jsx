import React from "react";
import style from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <div>
      <input type="text" readOnly value={displayVal} />
    </div>
  );
};

export default Display;
