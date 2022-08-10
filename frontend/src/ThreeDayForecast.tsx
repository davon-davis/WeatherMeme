import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { threeDayForecastData } from "./weatherFactory";
import Day from "./Day";

export default function ThreeDayForecast() {
  const threeDayForecast: Day[] = threeDayForecastData();

  const listItems: any = [];

  threeDayForecast.forEach((day) => {
    day.hourlyForecast.forEach((hour) => {
      listItems.push(
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <Typography>{hour.time}</Typography>
            <ListItemText primary={hour.temp} />
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
          width: "36rem",
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
        <List>{listItems}</List>
      </Box>
    </Box>
  );
}
