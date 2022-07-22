import { Box, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff73",
        height: "2rem",
        width: "100vw",
        display: "inline-flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50%",
          padding: ".5rem 0 0 2rem",
          justifyContent: "left",
        }}
      >
        <Typography
          sx={{ fontFamily: "copperplate,fantasy", fontSize: "14px" }}
        >
          WeatherMeme
        </Typography>
      </Box>
    </Box>
  );
}
