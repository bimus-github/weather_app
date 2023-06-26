import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherCoreApi = createApi({
  reducerPath: "weatherCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://foreca-weather.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c5141639a1msha8654e814b0bc91p1f15cbjsn715a3655436f"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCityInfo: builder.query({
      query: (name: string) => `location/search/${name}`,
    }),
    getCurrentWeather: builder.query({
      query: (id: number) => `current/${id}`,
    }),
    getTodayWeather: builder.query({
      query: (id: number) => `forecast/daily/${id}`,
    }),
    getHourlyWeather: builder.query({
      query: (id: number) => `forecast/hourly/${id}`,
    }),
  }),
});

export const {
  useGetCityInfoQuery,
  useGetCurrentWeatherQuery,
  useGetTodayWeatherQuery,
  useGetHourlyWeatherQuery,
} = weatherCoreApi;
