import { createSlice } from "@reduxjs/toolkit";
import {
  Location,
  Current,
  TodayForecast,
  HourlyForecast,
  isLoad,
} from "../../models";

type Props = {
  cityInfo: Location;
  currentData: Current;
  todayData: TodayForecast;
  hourlyData: HourlyForecast[];
  isLoading: isLoad;
};

const initialState: Props = {
  cityInfo: {
    country: "",
    id: 0,
    name: "",
  },
  currentData: {
    cloudiness: 0,
    dewPoint: 0,
    feelsLikeTemp: 0,
    precipProb: 0,
    precipRate: 0,
    pressure: 0,
    relHumidity: 0,
    symbol: "",
    symbolPhrase: "",
    temperature: 0,
    thunderProb: 0,
    time: "",
    uvIndex: 0,
    visibility: 0,
    windDir: 0,
    windDirString: "",
    windGust: 0,
    windSpeed: 0,
  },
  todayData: {
    maxTemp: 0,
    maxWindSpeed: 0,
    minTemp: 0,
  },
  isLoading: {
    isToday: true,
    isCity: true,
    isCurrent: true,
    isHourly: true,
  },
  hourlyData: [
    {
      feelsLikeTemp: 0,
      precipAccum: 0,
      precipProb: 0,
      symbol: "",
      temperature: 0,
      time: "",
      windDir: 0,
      windDirString: "SW",
      windGust: 0,
      windSpeed: 0,
    },
  ],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCityInfo: (state, action: { payload: Location; type: string }) =>
      void (state.cityInfo = action.payload),

    setCurrentData: (state, action: { payload: Current; type: string }) =>
      void (state.currentData = action.payload),

    setTodayData: (state, action: { payload: TodayForecast; type: string }) =>
      void (state.todayData = action.payload),

    setHourlyData: (
      state,
      action: { payload: HourlyForecast[]; type: string }
    ) => void (state.hourlyData = action.payload),

    setIsLoading: (
      state,
      action: {
        payload: {
          isToday: boolean;
          isCity: boolean;
          isCurrent: boolean;
          isHourly: boolean;
        };
        type: string;
      }
    ) => {
      void (state.isLoading = action.payload);
    },
  },
});

export const {
  setCityInfo,
  setIsLoading,
  setCurrentData,
  setTodayData,
  setHourlyData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
