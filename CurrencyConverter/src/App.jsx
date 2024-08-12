import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [conversionRates, setConversionRates] = useState(null);
  const crr_api =
    "https://v6.exchangerate-api.com/v6/357df64a2476762fc168c50f/latest/USD";

  useEffect(() => {
    fetch(crr_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConversionRates(data.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching the conversion rates:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Conversion Rates</h1>
      {conversionRates ? (
        <ul>
          {Object.entries(conversionRates).map(([currency, rate]) => (
            <li key={currency}>
              {currency}: {rate}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
