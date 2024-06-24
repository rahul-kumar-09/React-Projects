import React from "react";

const Display = ({ items }) => {
  return (
    <div>
      {items.map((items) => (
        <li key={items}>{items}</li>
      ))}
    </div>
  );
};

export default Display;
