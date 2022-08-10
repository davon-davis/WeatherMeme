import Weather from "./Weather";
import Day from "./Day";

export const currentForecastData = (): Weather => {
  const data = require("./forecast.json");

  return new Weather(
    data.location.name,
    data.current.temp_f,
    data.current.feelslike_f,
    Math.ceil(data.forecast.forecastday[0].day.mintemp_f),
    Math.ceil(data.forecast.forecastday[0].day.maxtemp_f),
    data.current.humidity,
    data.current.wind_mph,
    data.current.condition.text
  );
};

export const threeDayForecastData = (): Day[] => {
  const data = require("./forecast.json");
  const threeDays: Day[] = [];
  const hourlyWeather: Weather[] = [];

  const forecastDays = data.forecast.forecastday;

  forecastDays.forEach((day: any) => {
    day.hour.forEach((hour: any) => {
      let weather = new Weather(
        data.location.name,
        Math.ceil(hour.temp_f),
        Math.ceil(hour.feelslike_f),
        Math.ceil(data.forecast.forecastday[0].day.mintemp_f),
        Math.ceil(data.forecast.forecastday[0].day.maxtemp_f),
        hour.humidity,
        hour.wind_mph,
        hour.condition.text
      );
      weather.setTime(hour.time);
      hourlyWeather.push(weather);
    });

    let newDay = new Day(currentForecastData(), hourlyWeather);
    threeDays.push(newDay);
  });

  return threeDays;
};
