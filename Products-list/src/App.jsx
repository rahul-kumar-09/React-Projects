import "./App.css";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleItem from "./components/SingleItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/products/:id" element={<SingleItem />} />
      </Routes>
    </Router>
  );
}

export default App;
