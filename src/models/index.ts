export type Branchs = string[];

export type InitialToday = {
  id: number;
  location: string;
  time: string;
  tempDay: string;
  tempNight: string;
  infor: string;
  icons: {
    sun: boolean;
    moon: boolean;
    cloud: boolean;
    rain: boolean;
    snow: boolean;
  };
};

export type Location = {
  country: string;
  id: number;
  name: string;
};

export interface Current {
  cloudiness: number;
  dewPoint: number;
  feelsLikeTemp: number;
  precipProb: number;
  precipRate: number;
  pressure: number;
  relHumidity: number;
  symbol: string;
  symbolPhrase: string;
  temperature: number;
  thunderProb: number;
  time: string;
  uvIndex: number;
  visibility: number;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
}

export interface TodayForecast {
  maxTemp: number;
  maxWindSpeed: number;
  minTemp: number;
}

export interface HourlyForecast {
  feelsLikeTemp: number;
  precipAccum: number;
  precipProb: number;
  symbol: string;
  temperature: number;
  time: string;
  windDir: number;
  windDirString: string;
  windGust: number;
  windSpeed: number;
}

export interface isLoad {
  isToday: boolean;
  isCity: boolean;
  isCurrent: boolean;
  isHourly: boolean;
}
