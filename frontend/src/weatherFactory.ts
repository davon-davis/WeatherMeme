import Weather from "./Weather";

const kelvinToFahrenheit = (tempToConvert: number): number => {
  return Math.round((tempToConvert - 273.15) * (9 / 5) + 32);
};

export const WeatherFactory = () => {
  const weatherData = require("./fiveDayForecast.json");
  let fiveDayForecast: Weather[] = [];

  const forecastData: any[] = weatherData[0].list;
  console.log(forecastData);
  forecastData.forEach((day) => {
    let weather: Weather = new Weather(
      day.name,
      kelvinToFahrenheit(day.main.temp),
      day.main.feels_like,
      day.main.temp_min,
      day.main.temp_max,
      day.main.humidity,
      day.wind.speed,
      day.dt_txt
    );
    fiveDayForecast.push(weather);
    // console.log(day.dt_txt + " " + kelvinToFahrenheit(day.main.temp));
  });
};

export const CurrentTemp = (): Weather => {
  const currentTempData = require("./currentWeather.json");

  return new Weather(
    currentTempData.name,
    Math.ceil(currentTempData.main.temp),
    currentTempData.main.feels_like,
    currentTempData.main.temp_min,
    currentTempData.main.temp_max,
    currentTempData.main.humidity,
    currentTempData.wind.speed,
    currentTempData.weather[0].description
  );
};
