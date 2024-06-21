import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import style from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };

  return (
    <>
      <h2>Calculator</h2>
      <div className={style.container}>
        <Display displayVal={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
