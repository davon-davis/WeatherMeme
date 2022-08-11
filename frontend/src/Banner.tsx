import { Box, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff73",
        height: "3rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50%",
          padding: ".5rem 0 0 1rem",
          justifyContent: "left",
        }}
      >
        <Typography
          sx={{ fontFamily: "copperplate,fantasy", fontSize: "21px" }}
        >
          WeatherMeme
        </Typography>
      </Box>
    </Box>
  );
}
