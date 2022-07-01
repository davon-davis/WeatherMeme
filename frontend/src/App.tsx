import React, { useState } from "react";
import "./App.css";
import { WeatherFactory, CurrentTemp } from "./weatherFactory";
import Weather from "./Weather";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [currentTemp] = useState<Weather>(CurrentTemp());
  //map Very Hot, Hot, Mild, Cool, Cold, Very Cold
  WeatherFactory();

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
    <Box
      sx={{
        backgroundColor: getBgColor(),
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff73",
          height: "2rem",
          width: "100vw",
          display: "inline-flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "50%",
            padding: ".5rem 0 0 2rem",
            justifyContent: "left",
          }}
        >
          <Typography
            sx={{ fontFamily: "copperplate,fantasy", fontSize: "14px" }}
          >
            WeatherMeme
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "36rem",
          height: "13rem",
          backgroundColor: "#000080",
          border: ".05rem solid white",
          display: "flex",
          flexDirection: "column",
          borderRadius: "0.5rem 0.5rem 0rem 0rem",
          justifyContent: "center",
        }}
        data-testid={"current-temp"}
      >
        <Typography sx={{ color: "white" }}>{currentTemp.city}</Typography>
        <Box
          sx={{
            width: "36rem",
            height: "13rem",
            backgroundColor: "white",
            border: ".05rem solid white",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "0rem 0rem 0.5rem 0.5rem ",
          }}
        >
          <Box sx={{ flexDirection: "row" }}>
            <Typography sx={{ fontSize: "3rem", color: "black" }}>
              {currentTemp.temp}°
            </Typography>
            <Typography sx={{ fontSize: "2rem", color: "black" }}>
              {currentTemp.description}
            </Typography>
          </Box>
          <Box sx={{ flexDirection: "row" }}>
            <img src={require("./assets/fanning.gif")} alt={"hot-gif"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
