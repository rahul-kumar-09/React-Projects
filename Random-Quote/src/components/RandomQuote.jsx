import React, { useState } from "react";

const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  console.log(quotes);
  const [quote, setQuote] = useState({
    text: "Click next and start random qoutes",
    author: "Please Next",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">
        <h2>{quote.text}</h2>
      </div>
      <div className="author">{quote.author.split(",")[0]}</div>
      <button
        onClick={() => {
          random();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default RandomQuote;
