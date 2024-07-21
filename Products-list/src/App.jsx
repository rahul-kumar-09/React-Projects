import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((res) => {
        const reqest = res.products;
        setData(reqest);
      });
    });
  }, []);

  console.log(data);

  return (
    <div className="prolist d-flex flex-row mb-3 ">
      <List data={data} />
    </div>
  );
}

export default App;
