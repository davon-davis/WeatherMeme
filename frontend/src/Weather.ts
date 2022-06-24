import { WeatherTempType } from "./WeatherTempType";

export default class Weather {
  temp: number;

  feelsLike: number;

  tempMin: number;

  tempMax: number;

  humidity: number;

  windSpeed: number;

  description: string;

  tempType: WeatherTempType;

  constructor(
    temp: number,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    windSpeed: number,
    description: string
  ) {
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.description = description;
    this.tempType = this.getTempType(temp);
  }

  getTempType = (temp: number): WeatherTempType => {
    if (temp > 90) {
      return "Very Hot";
    }
    return "Mild";
  };

  //getTempMeme return "very hot"
}
