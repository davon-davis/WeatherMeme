import Weather from "./Weather";
import Day from "./Day";

function dateConverter(dateToConvert: string): string {
  let dateArray = dateToConvert.substring(0, 10).split("-");
  let date = new Date(+dateArray[0], +dateArray[1] - 1, +dateArray[2]);
  return date.toString().substring(0, 15);
}

export const currentForecastData = (): Weather => {
  const data = require("./forecast.json");

  return new Weather(
    data.location.name + ", " + data.location.region,
    data.current.temp_f,
    data.current.feelslike_f,
    Math.ceil(data.forecast.forecastday[0].day.mintemp_f),
    Math.ceil(data.forecast.forecastday[0].day.maxtemp_f),
    data.current.humidity,
    Math.ceil(data.current.wind_mph),
    data.current.condition.text,
    dateConverter(data.location.localtime),
    data.location.localtime.substring(10, data.location.localtime.length)
  );
};

export const threeDayForecastData = (): Day[] => {
  const data = require("./forecast.json");
  const threeDays: Day[] = [];
  const forecastDays = data.forecast.forecastday;

  forecastDays.forEach((day: any) => {
    let dayForecastWeather = new Weather(
      data.location.name + ", " + data.location.region,
      data.current.temp_f,
      data.current.feelslike_f,
      Math.ceil(day.day.mintemp_f),
      Math.ceil(day.day.maxtemp_f),
      day.humidity,
      Math.ceil(day.maxwind_mph),
      data.current.condition.text,
      dateConverter(day.date),
      data.location.localtime.substring(10, data.location.localtime.length)
    );

    let hourlyWeather: Weather[] = [];
    day.hour.forEach((hour: any) => {
      let weather = new Weather(
        data.location.name + ", " + data.location.region,
        Math.ceil(hour.temp_f),
        Math.ceil(hour.feelslike_f),
        Math.ceil(data.forecast.forecastday[0].day.mintemp_f),
        Math.ceil(data.forecast.forecastday[0].day.maxtemp_f),
        hour.humidity,
        Math.ceil(hour.wind_mph),
        hour.condition.text,
        dateConverter(day.date),
        hour.time.substring(10, hour.time.length)
      );
      if (hour.will_it_rain === 1) {
        weather.setPrecipitation(hour.chance_of_rain);
      }
      weather.setWindDirection(hour.wind_dir);
      weather.setDescriptionImage(hour.condition.icon);

      hourlyWeather.push(weather);
    });

    let newDay = new Day(dayForecastWeather, hourlyWeather);
    threeDays.push(newDay);
  });

  return threeDays;
};
