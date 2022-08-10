import React, { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import WeatherTabs from "./WeatherTabs";

function App() {
  // const getBgColor = (): string => {
  //   if (currentTemp.description === "clear sky") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "few clouds") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "scattered clouds") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "broken clouds") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "shower rain") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "rain") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "thunderstorm") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "snow") {
  //     return "#87CEEB";
  //   }
  //   if (currentTemp.description === "mist") {
  //     return "#87CEEB";
  //   }
  //   return "light grey";
  // };

  return (
    <>
      <Banner />
      <WeatherTabs />
    </>
  );
}

export default App;
