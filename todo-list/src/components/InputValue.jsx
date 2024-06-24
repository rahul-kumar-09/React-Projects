import React from "react";

const InputValue = ({ handleOnkeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        onKeyDown={handleOnkeyDown}
      />
    </div>
  );
};

export default InputValue;
