import React from "react";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { currentForecastData, threeDayForecastData } from "./weatherFactory";
import Day from "./Day";
// @ts-ignore
import { WiDaySunny } from "weather-icons-react";
import Weather from "./Weather";

export default function ThreeDayForecast() {
  const threeDayForecast: Day[] = threeDayForecastData();
  const current: Weather = currentForecastData();
  const listItems: any = [];

  threeDayForecast.forEach((day) => {
    day.hourlyForecast.forEach((hour) => {
      let time = hour.time.substring(10, hour.time.length);
      listItems.push(
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <Typography>{time}</Typography>
            <Typography
              sx={{
                paddingLeft: 2,
                width: "3rem",
                fontWeight: "bold",
              }}
              variant={"h5"}
            >
              {hour.temp}°
            </Typography>
            <Box
              component="img"
              sx={{ height: "2.5rem", width: "2.5rem", paddingLeft: 6 }}
              src={hour.descriptionImage}
              alt="description-image"
            />
            <Typography sx={{ width: "16rem" }}>{hour.description}</Typography>
            <Typography sx={{ width: "2rem", paddingLeft: 5 }}>
              {hour.precipitation ? hour.precipitation.toString() + "%" : "--"}
            </Typography>
            <Typography sx={{ paddingLeft: 4 }}>
              {hour.windDirection} {hour.windSpeed.toString() + " mph"}
            </Typography>
          </ListItemButton>
        </ListItem>
      );
    });
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#D3D3D3",
      }}
    >
      <Box
        sx={{
          width: "45rem",
          height: "auto",
          backgroundColor: "white",
          border: ".05rem solid white",
          display: "flex",
          flexDirection: "column",
          borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "2rem",
        }}
        data-testid={"current-temp"}
      >
        <Typography>Hourly Weather - {current.city}</Typography>
        <List>{listItems}</List>
      </Box>
    </Box>
  );
}
