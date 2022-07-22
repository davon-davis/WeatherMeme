import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Weather from "./Weather";

interface FiveDayForeCastContainerProps {
  currentTemp: Weather;
  currentDayForecast: Weather[];
}

export default function FiveDayForeCastContainer(
  props: FiveDayForeCastContainerProps
) {
  const { currentTemp, currentDayForecast } = props;

  return (
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
        <Typography>Today's Forecast for {currentTemp.city}</Typography>
      </Box>
      <Box
        sx={{
          width: "36rem",
          height: "13rem",
          backgroundColor: "white",
          border: ".05rem solid white",
          display: "flex",
          // justifyContent: "space-between",
          borderRadius: "0rem 0rem 0.5rem 0.5rem ",
        }}
      >
        <Box>
          <Typography>Morning</Typography>
          <Typography>{currentDayForecast[2].temp}</Typography>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Typography>Afternoon</Typography>
          <Typography>{currentDayForecast[4].temp}</Typography>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Typography>Evening</Typography>
          <Typography>{currentDayForecast[6].temp}</Typography>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Typography>Overnight</Typography>
          <Typography>{currentDayForecast[8].temp}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
