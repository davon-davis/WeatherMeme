import React, { useState } from "react";
import "./App.css";
import { WeatherFactory, CurrentTemp } from "./weatherFactory";
import Weather from "./Weather";

function App() {
  const [currentTemp] = useState<Weather>(CurrentTemp());
  //map Very Hot, Hot, Mild, Cool, Cold, Very Cold
  WeatherFactory();

  return <div className="App">{currentTemp.temp}</div>;
}

export default App;
