import Weather from "./Weather";

const kelvinToFahrenheit = (tempToConvert: number): number => {
  return Math.round((tempToConvert - 273.15) * (9 / 5) + 32);
};

export const FiveDayForecast = (): Weather[] => {
  const weatherData = require("./fiveDayHourlyForecast.json");
  let fiveDayForecast: Weather[] = [];

  const forecastData: any[] = weatherData[0].list;
  forecastData.forEach((day) => {
    let weather: Weather = new Weather(
      weatherData[0].city.name,
      Math.ceil(kelvinToFahrenheit(day.main.temp)),
      Math.ceil(kelvinToFahrenheit(day.main.feels_like)),
      Math.ceil(kelvinToFahrenheit(day.main.temp_min)),
      Math.ceil(kelvinToFahrenheit(day.main.temp_max)),
      day.main.humidity,
      Math.ceil(day.wind.speed),
      day.weather[0].description,
      day.dt_txt
    );
    fiveDayForecast.push(weather);
  });
  return fiveDayForecast;
};

export const CurrentTemp = (): Weather => {
  const currentTempData = require("./currentWeather.json");

  return new Weather(
    currentTempData.name,
    Math.ceil(currentTempData.main.temp),
    Math.ceil(currentTempData.main.feels_like),
    Math.ceil(currentTempData.main.temp_min),
    Math.ceil(currentTempData.main.temp_max),
    currentTempData.main.humidity,
    currentTempData.wind.speed,
    currentTempData.weather[0].description
  );
};

export const hourlyForecast = (): Weather[] => {
  const data = require("./fiveDayHourlyForecast.json");
  const hourlyData = data[0].list;
  const hourlyWeather: Weather[] = [];

  hourlyData.forEach((hour: any) => {
    let weather = new Weather(
      data[0].city.name,
      Math.ceil(kelvinToFahrenheit(hour.main.temp)),
      Math.ceil(kelvinToFahrenheit(hour.main.feels_like)),
      Math.ceil(kelvinToFahrenheit(hour.main.temp_min)),
      Math.ceil(kelvinToFahrenheit(hour.main.temp_max)),
      hour.main.humidity,
      Math.ceil(hour.wind.speed),
      hour.weather[0].description,
      hour.dt_txt
    );
    hourlyWeather.push(weather);
  });

  return hourlyWeather;
};

// export const TodaysForecast = ():
