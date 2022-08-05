import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Weather from "./Weather";
import { hourlyForecast } from "./weatherFactory";

interface HourlyContainer {
  currentTemp: Weather;
}

export default function HourlyContainer() {
  // const { currentTemp } = props;
  const hourly = hourlyForecast();
  const listItems: any = [];

  hourly.forEach((hour) => {
    listItems.push(
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary={hour.temp} />
        </ListItemButton>
      </ListItem>
    );
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
