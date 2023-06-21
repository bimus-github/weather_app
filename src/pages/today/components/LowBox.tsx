import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import LoadingMiddleBox from "../loading/LoadingMiddleBox";

import VerticalAlignCenter from "@mui/icons-material/VerticalAlignCenter";
import Opacity from "@mui/icons-material/Opacity";
import Compress from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import FlareIcon from "@mui/icons-material/Flare";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/material";

const typesOfInformation = [
  {
    key: 1,
    name: "high/low",
    icon: <VerticalAlignCenter sx={{ fontSize: 30 }} />,
    value: "--/23°",
  },
  {
    key: 2,
    name: "humiditiy",
    icon: <Opacity sx={{ fontSize: 30 }} />,
    value: "26%",
  },
  {
    key: 3,
    name: "pressure",
    icon: <Compress sx={{ fontSize: 30 }} />,
    value: "1005.1 mb°",
  },
  {
    key: 4,
    name: "visibility",
    icon: <VisibilityIcon sx={{ fontSize: 30 }} />,
    value: "9.66 km",
  },
  {
    key: 5,
    name: "wind",
    icon: <AirIcon sx={{ fontSize: 30 }} />,
    value: "14 km/h°",
  },
  {
    key: 6,
    name: "dew point",
    icon: <InvertColorsIcon sx={{ fontSize: 30 }} />,
    value: "10°",
  },
  {
    key: 7,
    name: "uv index",
    icon: <FlareIcon sx={{ fontSize: 30 }} />,
    value: "0 out of 10",
  },
  {
    key: 8,
    name: "moon phase",
    icon: <CircleIcon sx={{ fontSize: 30 }} />,
    value: "waxing crescent",
  },
];

export default function LowBox() {
  const [loading, SetLoading] = React.useState<boolean>(false);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
        <Stack
          sx={{
            width: "100%",
            height: 600,
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
            <Grid item xs={10}>
              <Typography variant="h6" gutterBottom>
                Weather Today in Location
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
                37°
              </Typography>
              <Typography variant="h6" gutterBottom>
                Good for going to the beach!!!
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
                    <Typography variant="h6">07:00</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyItems="center"
                  >
                    <SwipeDownAltIcon sx={{ fontSize: 30, color: "yellow" }} />
                    <Typography variant="h6">17:00</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0.5} />
          </Grid>

          <Grid container>
            {typesOfInformation?.map((type, i) => (
              <Grid
                item
                xs={6}
                style={{
                  height: 40,
                  padding: 1,
                  marginTop: 3,
                  marginBottom: 3,
                }}
                key={type?.key}
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
                  <Typography>{type?.value}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </>
  );
}
