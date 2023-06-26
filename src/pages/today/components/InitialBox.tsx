import { Stack, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import LoadingInitialBox from "../loading/LoadingInitialBox";

import MovingIcons from "../../../weatherIcons/movingIcons/MovingIcon";

export default function InitialBox() {
  const {
    cityInfo,
    currentData,
    todayData,
    isLoading: { isCity, isCurrent, isToday },
  } = useSelector((state: RootState) => state.weather);

  if (isCity || isCurrent || isToday) return <LoadingInitialBox />;

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
        justifyItems="center"
        alignItems="center"
      >
        <Grid item xs={0.5}></Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            {cityInfo?.name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="overline" display="block" gutterBottom>
            {currentData?.time.slice(0, 10)} | {currentData?.time.slice(11, 16)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption" display="block" gutterBottom>
            max. wind speed: {todayData?.maxWindSpeed} (km/h)
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
              {currentData?.feelsLikeTemp}°
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {currentData?.symbolPhrase}
            </Typography>
            <Typography variant="inherit" gutterBottom>
              Day: {todayData?.maxTemp}° ⋅ Night: {todayData?.minTemp}°
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
            moon={currentData?.symbol?.slice(0, 1) == "n" ? true : false}
            sun={currentData?.symbol?.slice(0, 1) == "d" ? true : false}
            rain={+currentData?.symbol?.slice(2, 3) >= 1 ? true : false}
            cloud={+currentData?.symbol?.slice(1, 2) >= 2 ? true : false}
            snow={+currentData?.symbol?.slice(3, 4) >= 2 ? true : false}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
