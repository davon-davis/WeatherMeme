import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/forecast",
    params: { q: "austin,us" },
    headers: {
      "X-RapidAPI-Key": "4115cbca79mshb98c674da0cbc1dp114d16jsnfe28b20a25e2",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.list[0].main.temp);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
