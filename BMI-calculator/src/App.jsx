import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and Height !");
    } else {
      let bmiFormula = (weight / (height * height)) * 703;
      setBmi(bmiFormula.toFixed(2));
    }

    if (bmi < 25) {
      setMsg("You are Underweight !");
    } else if (bmi >= 25 || bmi <= 30) {
      setMsg("You're Healthy");
    } else {
      setMsg("You're Unhealthy");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Age
            </label>
            <input
              type="number"
              class="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Weight
            </label>
            <input
              type="number"
              class="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Height
            </label>
            <input
              type="number"
              class="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" class="btn btn-primary mt-6">
              Submit
            </button>
            <button type="submit" class="btn btn-primary " onClick={reload}>
              Reload
            </button>
          </div>

          <div className="result-box mt-5">
            <p class="fw-medium">Age: {age}</p>
            <p class="fw-medium">Your BMI is: {bmi}</p>
            <p class="fw-medium">{msg}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
