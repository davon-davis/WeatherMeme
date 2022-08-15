import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { currentForecastData, threeDayForecastData } from "./weatherFactory";
import Day from "./Day";
// @ts-ignore
import { WiDaySunny } from "weather-icons-react";
import Weather from "./Weather";

export default function ThreeDayForecast() {
  const threeDayForecast: Day[] = threeDayForecastData();
  const current: Weather = currentForecastData();
  const [listItems] = useState<any>([]);

  threeDayForecast.forEach((day) => {
    listItems.push(
      <>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <Typography
              sx={{
                width: "15rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {day.currentForecast.date}
            </Typography>
          </ListItemButton>
        </ListItem>
        <Divider />
      </>
    );
    day.hourlyForecast.forEach((hour) => {
      listItems.push(
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <Typography>{hour.time}</Typography>
            <Typography
              sx={{
                width: "3rem",
                fontWeight: "bold",
                paddingLeft: 2,
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
        background: "linear-gradient(#77B3D9, #CEE8F2)",
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
          margin: "2rem 0rem 2rem 0rem",
          // paddingLeft: ,
        }}
        data-testid={"current-temp"}
      >
        <Typography sx={{ paddingLeft: 2 }}>
          <strong>Hourly Weather</strong> - {current.city}
        </Typography>
        <Typography sx={{ paddingLeft: 2 }}>As of {current.time}</Typography>
        <List>{listItems}</List>
      </Box>
    </Box>
  );
}
