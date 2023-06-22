import React from "react";
import { Stack, Grid, Typography } from "@mui/material";

import LoadingInitialBox from "../loading/LoadingInitialBox";

import MovingIcons from "../../../weatherIcons/movingIcons/MovingIcon";

const initialInformation = {
  id: 0,
  location: "Tashkent",
  time: "2023 06 22, 13:00",
  tempDay: "37",
  tempNight: "20",
  infor: "Cloudy",
  icons: {
    sun: true,
    moon: false,
    cloud: true,
    rain: true,
    snow: false,
  },
};

export default function InitialBox() {
  const [loading, setLoading] = React.useState<boolean>(false);

  if (loading) return <LoadingInitialBox />;

  return (
    <Stack
      sx={{
        width: "100%",
        height: 300,
        background: "#82e8fa",
        padding: 1,
        borderRadius: 5,
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
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            {initialInformation?.location}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="overline" display="block" gutterBottom>
            {initialInformation?.time}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "100%",
          height: 200,
          padding: 1,
        }}
        container
        spacing={1}
      >
        <Grid item xs={0.5} />
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="h2" gutterBottom>
              {initialInformation?.tempDay}°
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {initialInformation?.infor}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Day: {initialInformation?.tempDay}° ⋅ Night:{" "}
              {initialInformation?.tempNight}°
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} />
        <Grid
          item
          xs={4}
          sx={{
            position: "center",
          }}
        >
          <MovingIcons
            moon={initialInformation?.icons?.moon}
            sun={initialInformation?.icons?.sun}
            rain={initialInformation?.icons?.rain}
            cloud={initialInformation?.icons?.cloud}
            snow={initialInformation?.icons?.snow}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
