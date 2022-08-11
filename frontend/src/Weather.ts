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

  time: string;

  tempType: WeatherTempType;

  precipitation?: number;

  windDirection?: string;

  descriptionImage?: string;

  constructor(
    city: string,
    temp: number,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    windSpeed: number,
    description: string,
    time: string
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
    this.time = time;
  }

  getTempType = (temp: number): WeatherTempType => {
    if (temp > 90) {
      return "Very Hot";
    }
    return "Mild";
  };

  setTime = (time: string): void => {
    this.time = time;
  };

  setPrecipitation = (chance: number): void => {
    this.precipitation = chance;
  };

  setWindDirection = (direction: string): void => {
    this.windDirection = direction;
  };

  setDescriptionImage = (image: string): void => {
    this.descriptionImage = image;
  };

  //getTempMeme return "very hot"
  // getWeatherIcon = () => {
  //   if (this.description === "light rain") {
  //     return;
  //   }
  // };
}
