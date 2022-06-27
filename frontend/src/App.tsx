import React, { useState } from "react";
import "./App.css";
import { WeatherFactory, CurrentTemp } from "./weatherFactory";
import Weather from "./Weather";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [currentTemp] = useState<Weather>(CurrentTemp());
  //map Very Hot, Hot, Mild, Cool, Cold, Very Cold
  WeatherFactory();

  return (
    <Box sx={{ backgroundColor: "#282c34", height: "100vh", width: "100vw" }}>
      <Box
        sx={{
          width: "35rem",
          border: ".05rem solid white",
          display: "flex",
          justifyContent: "spaceBetween",
        }}
        data-testid={"current-temp"}
      >
        <Box sx={{ flexDirection: "row" }}>
          <Typography sx={{ fontSize: "3rem", color: "white" }}>
            {currentTemp.temp}
          </Typography>
          <Typography sx={{ fontSize: "2rem", color: "white" }}>
            {currentTemp.description}
          </Typography>
        </Box>
        <Box sx={{ flexDirection: "row" }}>
          <img src={require("./assets/fanning.gif")} alt={"hot-gif"} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
