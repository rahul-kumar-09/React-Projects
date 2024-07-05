import "./App.css";

function App() {
  let dates = new Date();

  let weekDay = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = dates.getDate();
  const weekday = weekDay[dates.getDate()];
  const month = months[dates.getMonth()];
  const year = dates.getFullYear();

  return (
    <>
      <div className="container">
        <div className="left-box">
          <h1>{date}</h1>
          <h2>{weekday}</h2>
        </div>
        <div className="right-box">
          <h1>{month}</h1>
          <h2>{year}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
