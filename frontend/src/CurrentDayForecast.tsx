import { Box, Divider, Typography } from "@mui/material";
import React from "react";
// @ts-ignore
import { WiDaySunny } from "weather-icons-react";
import { threeDayForecastData } from "./weatherFactory";

export default function CurrentDayForecast() {
  const currentDay = threeDayForecastData()[0];
  const currentDayForecast = currentDay.hourlyForecast;

  let getWeatherImage = () => {
    console.log(currentDay.currentForecast.description);
    if (currentDay.currentForecast.description === "Partly cloudy") {
      return <WiDaySunny size={60} />;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "36rem",
          height: "13rem",
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
          alignSelf: "center",
        }}
      >
        <Box
          sx={{
            width: "36rem",
            height: "2rem",
            backgroundColor: "white",
            border: ".05rem solid white",
            borderRadius: "0.5rem 0.5rem 0rem 0rem  ",
          }}
        >
          <Typography sx={{ paddingLeft: ".5rem" }}>
            Today's Forecast for {currentDay.currentForecast.city}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "36rem",
            height: "13rem",
            backgroundColor: "white",
            border: ".05rem solid white",
            display: "flex",
            justifyContent: "space-evenly",
            borderRadius: "0rem 0rem 0.5rem 0.5rem ",
            alignContent: "center",
          }}
        >
          <Box>
            <Typography variant="h5">Morning</Typography>
            <Typography variant="h4" sx={{ color: "blue", padding: 0 }}>
              {currentDayForecast[6].temp}°
            </Typography>
            {getWeatherImage()}
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Afternoon</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[12].temp}°
            </Typography>
            {getWeatherImage()}
            <Typography>{}</Typography>
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Evening</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[18].temp}°
            </Typography>
            {getWeatherImage()}
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Overnight</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[23].temp}°
            </Typography>
            {getWeatherImage()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
