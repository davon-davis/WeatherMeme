import axios from "axios";

const forecast = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
  params: { q: "Austin", days: "3" },
  headers: {
    "X-RapidAPI-Key": "4115cbca79mshb98c674da0cbc1dp114d16jsnfe28b20a25e2",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

axios
  .request(forecast)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
