import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack, Grid, Typography, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { HourlyForecast } from "../../models";
import LoadingPage from "../LoadingPage";
import {
  setHourlyData,
  setIsLoading,
} from "../../store/features/weatherReducer";
import { useGetHourlyWeatherQuery } from "../../store/servers/weatherCoreApi";

export default function HourlyPage() {
  const dispatch = useDispatch();
  const {
    cityInfo,
    hourlyData,
    isLoading: { isCity, isHourly, isCurrent, isToday },
  } = useSelector((state: RootState) => state.weather);

  const { data: hourly, isFetching: loadHourly } = useGetHourlyWeatherQuery(
    cityInfo?.id
  );

  useEffect(() => {
    dispatch(setHourlyData(hourly?.forecast));

    dispatch(
      setIsLoading({
        isCurrent,
        isCity,
        isHourly: loadHourly,
        isToday,
      })
    );
  }, [loadHourly]);

  if (isCity || isHourly) return <LoadingPage />;

  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#82e8fa",
        borderRadius: 5,
        padding: 1,
        "&:hover": {
          //   backgroundColor: "#a2edfa",
          opacity: 0.9,
        },
      }}
      spacing={2}
    >
      <Grid
        sx={{
          width: "100%",
          padding: 1,
        }}
        container
        spacing={1}
      >
        <Grid item xs={0.5}></Grid>
        <Grid item xs={10}>
          <Typography variant="h6" gutterBottom>
            Hourly Forecast for {cityInfo?.name}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "100%",
          padding: 1,
        }}
        container
        spacing={1}
      >
        {hourlyData?.map((hData: HourlyForecast, index) => (
          <Grid item xs={6} key={index}>
            <Grid container spacing={1} sx={{ padding: 1 }}>
              <Grid item xs={3}>
                {hData?.time.slice(5, 7)}.{hData?.time.slice(8, 10)} |{" "}
                {hData?.time.slice(11, 16)} ={">"}
              </Grid>
              <Grid item xs={2}>
                T: {hData?.feelsLikeTemp}° ={">"}
              </Grid>
              <Grid item xs={3}>
                {+hData?.symbol?.slice(2, 3) === 0
                  ? "clear"
                  : +hData?.symbol?.slice(2, 3) > 3
                  ? "strong rain"
                  : +hData?.symbol?.slice(2, 3) > 1
                  ? "light rain"
                  : ""}{" "}
                {+hData?.symbol?.slice(3, 4) >= 2 && "&& snow"} ={">"}
              </Grid>
              <Grid item xs={4}>
                w.speed: {hData?.windSpeed}±{hData?.windGust} km/h
              </Grid>
            </Grid>
            <MiddleBorder style={{ width: "100%", height: 0.2 }} />
          </Grid>
        ))}
        <MiddleBorder style={{ width: 0.2, height: "100%" }} />
      </Grid>
    </Stack>
  );
}

const MiddleBorder = styled(Paper)(({ theme, style }) => ({
  backgroundColor: "#000",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: style?.width,
  height: style?.height,
}));
