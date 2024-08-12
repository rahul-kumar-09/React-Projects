import { useState } from "react";
import "./App.css";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bbc150f1-a0f8-4afe-bb12-e208469de2d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" /> <br />
      <label>Email</label>
      <input type="email" name="email" />
      <br />
      <label>Message</label>
      <textarea name="message"></textarea>
      <br />
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default App;
