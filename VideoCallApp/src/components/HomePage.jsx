import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const submitHandler = () => {
    console.log("hello");
    navigate(`/room/${input}`)
  };

  return (
    <div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="submit-btn">
        <button onClick={submitHandler}>Join</button>
      </div>
    </div>
  );
};

export default HomePage;
