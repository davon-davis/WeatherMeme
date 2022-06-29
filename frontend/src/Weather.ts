import { WeatherTempType } from "./WeatherTempType";

export default class Weather {
  city: string;

  temp: number;

  feelsLike: number;

  tempMin: number;

  tempMax: number;

  humidity: number;

  windSpeed: number;

  description: string;

  tempType: WeatherTempType;

  constructor(
    city: string,
    temp: number,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    windSpeed: number,
    description: string
  ) {
    this.city = city;
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
