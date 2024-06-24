import { useState } from "react";
import "./App.css";
import InputValue from "./components/InputValue";
import Display from "./components/Display";

function App() {
  const [todo, setTodo] = useState(["Ramu", "Shyamu"]);

  const handleOnkeyDown = () => {
    if (event.key === "Enter") {
      const newStudentItem = event.target.value;
      const newItems = [...todo, newStudentItem];
      setTodo(newItems);
      console.log(newStudentItem);
      event.target.value = "";
    }
  };

  return (
    <>
      <InputValue handleOnkeyDown={handleOnkeyDown} />
      <Display items={todo} />
    </>
  );
}

export default App;
