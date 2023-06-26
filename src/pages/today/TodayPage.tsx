import { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InitialBox from "./components/InitialBox";
import LowBox from "./components/LowBox";
import {
  useGetCurrentWeatherQuery,
  useGetHourlyWeatherQuery,
  useGetTodayWeatherQuery,
} from "../../store/servers/weatherCoreApi";
import { RootState } from "../../store";
import {
  setCurrentData,
  setHourlyData,
  setIsLoading,
  setTodayData,
} from "../../store/features/weatherReducer";
import LoadingPage from "../LoadingPage";

export default function TodayPage() {
  const dispatch = useDispatch();
  const {
    cityInfo,
    isLoading: { isCurrent, isCity, isHourly, isToday },
    currentData,
    todayData,
    hourlyData,
  } = useSelector((state: RootState) => state.weather);

  const { data: today, isFetching: loadToday } = useGetTodayWeatherQuery(
    cityInfo?.id
  );

  const { data: current, isFetching: loadCurrent } = useGetCurrentWeatherQuery(
    cityInfo?.id
  );

  console.log(cityInfo, currentData, todayData, hourlyData);

  useEffect(() => {
    dispatch(
      setTodayData({
        maxTemp: today?.forecast[0]?.maxTemp,
        maxWindSpeed: today?.forecast[0]?.maxWindSpeed,
        minTemp: today?.forecast[0]?.minTemp,
      })
    );

    dispatch(
      setIsLoading({
        isCurrent: loadCurrent,
        isCity,
        isHourly,
        isToday: loadToday,
      })
    );

    dispatch(setCurrentData(current?.current));
  }, [loadCurrent, loadToday, today, current]);

  if (isCurrent || isCity || isToday) return <LoadingPage />;

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <InitialBox />

        <LowBox />
      </Stack>
    </Box>
  );
}
