import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";
import VerticalAlignCenter from "@mui/icons-material/VerticalAlignCenter";
import Opacity from "@mui/icons-material/Opacity";
import Compress from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import FlareIcon from "@mui/icons-material/Flare";
import CircleIcon from "@mui/icons-material/Circle";

import LoadingLowBox from "../loading/LoadingLowBox";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const allInformation = [
  {
    id: 0,
    location: "Tashkent",
    temp: "37",
    infor: "Good for going to beach!",
    sunrise: "04:30",
    sunset: "20:00",
  },
  {
    id: 1,
    name: "high/low",
    icon: <VerticalAlignCenter sx={{ fontSize: 30 }} />,
    value: "--/23°",
  },
  {
    id: 2,
    name: "humiditiy",
    icon: <Opacity sx={{ fontSize: 30 }} />,
    value: "26%",
  },
  {
    id: 3,
    name: "pressure",
    icon: <Compress sx={{ fontSize: 30 }} />,
    value: "1005.1 mb°",
  },
  {
    id: 4,
    name: "visibility",
    icon: <VisibilityIcon sx={{ fontSize: 30 }} />,
    value: "9.66 km",
  },
  {
    id: 5,
    name: "wind",
    icon: <AirIcon sx={{ fontSize: 30 }} />,
    value: "14 km/h°",
  },
  {
    id: 6,
    name: "dew point",
    icon: <InvertColorsIcon sx={{ fontSize: 30 }} />,
    value: "10°",
  },
  {
    id: 7,
    name: "uv index",
    icon: <FlareIcon sx={{ fontSize: 30 }} />,
    value: "0 out of 10",
  },
  {
    id: 8,
    name: "moon phase",
    icon: <CircleIcon sx={{ fontSize: 30 }} />,
    value: "waxing crescent",
  },
];

export default function LowBox() {
  const {
    cityInfo,
    currentData,
    todayData,
    isLoading: { isCity, isCurrent, isToday },
  } = useSelector((s: RootState) => s.weather);
  const [loading, SetLoading] = React.useState<boolean>(false);

  if (isCity || isCurrent || isToday) return <LoadingLowBox />;

  return (
    <Stack
      sx={{
        width: "100%",
        height: 500,
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
        <Grid item xs={0.5} />
        <Grid item xs={7}>
          <Typography variant="h6" gutterBottom>
            Weather Today in {cityInfo?.name}, {cityInfo?.country}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="overline" gutterBottom>
            {currentData?.time.slice(0, 10)} | {currentData?.time.slice(11, 16)}
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
        <Grid item xs={0.5} />
        <Grid item xs={5.5}>
          <Typography variant="h2" gutterBottom>
            {currentData?.temperature}°
          </Typography>
          <Typography variant="h6" gutterBottom>
            {currentData?.symbolPhrase}
          </Typography>
        </Grid>
        <Grid item xs={5.5}>
          <Grid spacing={1} container>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <Stack alignItems="center" justifyItems="center">
                <Brightness4Icon sx={{ fontSize: 150, color: "yellow" }} />
              </Stack>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyItems="center"
              >
                <SwipeUpAltIcon sx={{ fontSize: 30, color: "yellow" }} />
                <Typography variant="h6">
                  {allInformation[0]?.sunrise}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyItems="center"
              >
                <SwipeDownAltIcon sx={{ fontSize: 30, color: "yellow" }} />
                <Typography variant="h6">
                  {allInformation[0]?.sunset}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0.5} />
      </Grid>

      <Grid container>
        {allInformation?.slice(1, 9)?.map((type, i) => (
          <Grid
            item
            xs={6}
            style={{
              height: 40,
              padding: 1,
              marginTop: 3,
              marginBottom: 3,
            }}
            key={type?.id}
          >
            <Stack
              spacing={2}
              flexDirection="row"
              alignItems="center"
              justifyItems="center"
              display="flex"
              borderTop={1}
              justifyContent="space-between"
              style={{ paddingLeft: "10px", paddingRight: "5px" }}
            >
              <Box
                alignItems="center"
                justifyItems="center"
                display="flex"
                width={150}
                justifyContent="space-between"
              >
                {type?.icon}
                <Typography variant="overline">{type?.name}</Typography>
              </Box>
              <Typography>
                {type?.name === "high/low" &&
                  `${todayData?.maxTemp}°/${todayData?.minTemp}°`}
                {type?.name === "pressure" && `${currentData?.pressure} mb`}
                {type?.name === "wind" && `${currentData?.windSpeed} km/h`}
                {type?.name === "uv index" &&
                  `${currentData?.uvIndex} out of 10`}
                {type?.name === "humidity" && `${currentData?.relHumidity}%`}
                {type?.name === "visibility" && `${currentData?.visibility} m`}
                {type?.name === "dew point" && `${currentData?.dewPoint}°`}
                {type?.name === "moon phase" && `${type?.value}`}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
