import { Box, Typography } from "@mui/material";
import Weather from "./Weather";

interface CurrentTempContainerProps {
  currentTemp: Weather;
}

export default function CurrentTempContainer(props: CurrentTempContainerProps) {
  const { currentTemp } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          alignSelf: "center",
          paddingTop: "1rem",
          marginTop: "2rem",
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
            <Typography
              sx={{
                fontSize: "2rem",
                color: "black",
                textTransform: "capitalize",
              }}
            >
              {currentTemp.description}
            </Typography>
            <Typography sx={{ fontSize: "2rem", color: "black" }}>
              Day {currentTemp.tempMax}° Night {currentTemp.tempMin}°
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
