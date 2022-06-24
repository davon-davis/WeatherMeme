import axios from "axios";

const forecastOptions = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/forecast",
  params: { q: "austin,us" },
  headers: {
    "X-RapidAPI-Key": "4115cbca79mshb98c674da0cbc1dp114d16jsnfe28b20a25e2",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

axios
  .request(forecastOptions)
  .then(function (response) {
    console.log(response.data.list[0].main.temp);
  })
  .catch(function (error) {
    console.error(error);
  });

const currentTempOptions = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "austin,us",
    lat: "0",
    lon: "0",
    id: "2172797",
    lang: "null",
    units: "imperial",
  },
  headers: {
    "X-RapidAPI-Key": "4115cbca79mshb98c674da0cbc1dp114d16jsnfe28b20a25e2",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

axios
  .request(currentTempOptions)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
