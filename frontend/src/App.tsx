import React, { useState } from "react";
import "./App.css";
import { FiveDayForecast, CurrentTemp } from "./weatherFactory";
import Weather from "./Weather";
import { Box } from "@mui/material";
import Banner from "./Banner";
import WeatherTabs from "./WeatherTabs";

function App() {
  const [currentTemp] = useState<Weather>(CurrentTemp());
  const [fiveDayForecast] = useState<Weather[]>(FiveDayForecast());
  const currentDayForecast = fiveDayForecast.slice(0, 9);

  console.log("five day forecast here", fiveDayForecast);
  console.log(currentDayForecast);

  const getBgColor = (): string => {
    if (currentTemp.description === "clear sky") {
      return "#87CEEB";
    }
    if (currentTemp.description === "few clouds") {
      return "#87CEEB";
    }
    if (currentTemp.description === "scattered clouds") {
      return "#87CEEB";
    }
    if (currentTemp.description === "broken clouds") {
      return "#87CEEB";
    }
    if (currentTemp.description === "shower rain") {
      return "#87CEEB";
    }
    if (currentTemp.description === "rain") {
      return "#87CEEB";
    }
    if (currentTemp.description === "thunderstorm") {
      return "#87CEEB";
    }
    if (currentTemp.description === "snow") {
      return "#87CEEB";
    }
    if (currentTemp.description === "mist") {
      return "#87CEEB";
    }
    return "light grey";
  };

  return (
    <>
      <Banner />
      <WeatherTabs
        currentTemp={currentTemp}
        currentDayForecast={currentDayForecast}
      />
    </>
  );
}

export default App;
