import Weather from "./Weather";

export default class Day {
  currentForecast: Weather;
  hourlyForecast: Weather[];

  constructor(currentForecast: Weather, hourlyForecast: Weather[]) {
    this.currentForecast = currentForecast;
    this.hourlyForecast = hourlyForecast;
  }
}
