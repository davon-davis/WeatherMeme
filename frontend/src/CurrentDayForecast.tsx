import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { threeDayForecastData } from "./weatherFactory";

export default function CurrentDayForecast() {
  const currentDay = threeDayForecastData()[0];
  const currentDayForecast = currentDay.hourlyForecast;
  const [listItems] = useState<any>([]);

  function getCurrentDayForecast(): any {
    for (let i: number = 0; currentDayForecast.length - 1; i++) {
      if (i % 6 || i === 23) {
        listItems.push(
          <Box>
            <Typography variant="h5">Morning</Typography>
            <Typography variant="h4" sx={{ color: "blue", padding: 0 }}>
              {currentDayForecast[i].temp}°
            </Typography>
            <Box
              component="img"
              sx={{ height: "5rem", width: "5rem" }}
              src={currentDayForecast[i].descriptionImage}
              alt="description-image"
            />
          </Box>
        );
      }
    }
  }

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
            <Box
              component="img"
              sx={{ height: "4rem", width: "4rem" }}
              src={currentDayForecast[6].descriptionImage}
              alt="description-image"
            />
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Afternoon</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[12].temp}°
            </Typography>
            <Box
              component="img"
              sx={{ height: "4rem", width: "4rem" }}
              src={currentDayForecast[12].descriptionImage}
              alt="description-image"
            />
            <Typography>{}</Typography>
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Evening</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[18].temp}°
            </Typography>
            <Box
              component="img"
              sx={{ height: "4rem", width: "4rem" }}
              src={currentDayForecast[18].descriptionImage}
              alt="description-image"
            />
          </Box>
          <Divider orientation="vertical" />
          <Box>
            <Typography variant="h5">Overnight</Typography>
            <Typography variant="h4" sx={{ color: "blue" }}>
              {currentDayForecast[23].temp}°
            </Typography>
            <Box
              component="img"
              sx={{ height: "4rem", width: "4rem" }}
              src={currentDayForecast[23].descriptionImage}
              alt="description-image"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
