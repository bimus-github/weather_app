import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack, Grid, Typography, Paper } from "@mui/material";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import { yellow, grey, blue } from "@mui/material/colors";

import LoadingMiddleBox from "../loading/LoadingMiddleBox";
import Icons from "../../../weatherIcons/icons/Icons";

const mainInformation = [
  {
    id: "0",
    location: "Tashkent",
  },
  {
    id: 1,
    time: "Morning",
    temp: "37",
    icons: {
      sun: true,
      moon: false,
      cloud: true,
      rain: true,
      snow: false,
    },
    humidity: "26",
  },
  {
    id: 2,
    time: "Afternoon",
    temp: "40",
    icons: {
      sun: false,
      moon: true,
      cloud: true,
      rain: true,
      snow: false,
    },
    humidity: "26",
  },
  {
    id: 3,
    time: "Evening",
    temp: "30",
    icons: {
      sun: false,
      moon: true,
      cloud: true,
      rain: false,
      snow: false,
    },
    humidity: "28",
  },
  {
    id: 4,
    time: "Over Night",
    temp: "20",
    icons: {
      sun: false,
      moon: true,
      cloud: true,
      rain: true,
      snow: false,
    },
    humidity: "30",
  },
];

export default function MiddleBox() {
  const [loading, SetLoading] = React.useState<boolean>(false);

  console.log(mainInformation?.slice(1, 5));

  if (loading) return <LoadingMiddleBox />;

  return (
    <Stack
      sx={{
        width: "100%",
        height: 400,
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
            Today's Forecast for {mainInformation[0]?.location}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "100%",
          height: 300,
          padding: 1,
        }}
        container
        spacing={1}
      >
        {mainInformation?.slice(1, 5)?.map((infor, i) => (
          <>
            <Grid item xs={2.5}>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  padding: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {infor.time}
                </Typography>
                <Typography variant="h2" gutterBottom>
                  {infor?.temp}°
                </Typography>
                <Box>
                  <Icons
                    moon={infor?.icons?.moon}
                    rain={infor?.icons?.rain}
                    sun={infor?.icons?.sun}
                    snow={infor?.icons?.snow}
                    cloud={infor?.icons?.cloud}
                  />
                </Box>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OpacityRoundedIcon sx={{ fontSize: 20, color: blue[500] }} />
                  <Typography variant="h6" gutterBottom>
                    {infor?.humidity}%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={0.5}>
              <MiddleBorder />
            </Grid>
          </>
        ))}
      </Grid>
    </Stack>
  );
}

const MiddleBorder = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: 0.2,
  height: 300,
}));
