import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import { yellow, grey, blue } from "@mui/material/colors";

import LoadingMiddleBox from "../loading/LoadingMiddleBox";

export default function MiddleBox() {
  const [loading, SetLoading] = React.useState<boolean>(false);

  return (
    <>
      {loading ? (
        <LoadingMiddleBox />
      ) : (
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
                Today's Forecast for Location
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
            {/* Morning */}
            <Grid item xs={2.5}>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  padding: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Morning
                </Typography>
                <Typography variant="h2" gutterBottom>
                  37°
                </Typography>
                <Box>
                  <LightModeSharpIcon
                    sx={{ fontSize: 80, color: yellow[500] }}
                  />
                  <CloudSharpIcon
                    sx={{
                      fontSize: 60,
                      color: grey[300],
                    }}
                  />
                </Box>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OpacityRoundedIcon sx={{ fontSize: 20, color: blue[500] }} />
                  <Typography variant="h6" gutterBottom>
                    5%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={0.5}>
              <MiddleBorder />
            </Grid>

            {/* Afternoon */}
            <Grid item xs={2.5}>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  padding: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Afternoon
                </Typography>
                <Typography variant="h2" gutterBottom>
                  37°
                </Typography>
                <Box>
                  <LightModeSharpIcon
                    sx={{ fontSize: 80, color: yellow[500] }}
                  />
                  <CloudSharpIcon
                    sx={{
                      fontSize: 60,
                      color: grey[300],
                    }}
                  />
                </Box>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OpacityRoundedIcon sx={{ fontSize: 20, color: blue[500] }} />
                  <Typography variant="h6" gutterBottom>
                    5%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={0.5}>
              <MiddleBorder />
            </Grid>

            {/* Evening */}
            <Grid item xs={2.5}>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  padding: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Evening
                </Typography>
                <Typography variant="h2" gutterBottom>
                  37°
                </Typography>
                <Box>
                  <LightModeSharpIcon
                    sx={{ fontSize: 80, color: yellow[500] }}
                  />
                  <CloudSharpIcon
                    sx={{
                      fontSize: 60,
                      color: grey[300],
                    }}
                  />
                </Box>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OpacityRoundedIcon sx={{ fontSize: 20, color: blue[500] }} />
                  <Typography variant="h6" gutterBottom>
                    5%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={0.5}>
              <MiddleBorder />
            </Grid>

            {/* OverNight */}
            <Grid item xs={2.5}>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  padding: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Overnight
                </Typography>
                <Typography variant="h2" gutterBottom>
                  37°
                </Typography>
                <Box>
                  <LightModeSharpIcon
                    sx={{ fontSize: 80, color: yellow[500] }}
                  />
                  <CloudSharpIcon
                    sx={{
                      fontSize: 60,
                      color: grey[300],
                    }}
                  />
                </Box>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <OpacityRoundedIcon sx={{ fontSize: 20, color: blue[500] }} />
                  <Typography variant="h6" gutterBottom>
                    5%
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </>
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
