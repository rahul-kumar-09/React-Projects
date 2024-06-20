import { useState } from "react";
import "./App.css";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const updateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Digital Clock</h1>
        </div>
        <div className="times">
          <h1>{time}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
