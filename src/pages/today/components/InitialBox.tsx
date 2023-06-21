import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { yellow, grey } from "@mui/material/colors";

import LoadingInitialBox from "../loading/LoadingInitialBox";

import { makeStyles } from "@material-ui/core/styles";
// import Box as Box2 from "@material-ui/core/Box";

export default function InitialBox() {
  const classes = useStyles();
  const [movedCloud, setMovedCloud] = React.useState(false);
  const [movedSun, setMovedSun] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleMoveSun = () => {
    setMovedSun((p) => !p);
  };

  const handleMoveCloud = () => {
    setMovedCloud((p) => !p);
  };

  React.useEffect(() => {
    const intervalSun = setInterval(() => {
      setMovedSun((p) => !p);
    }, 2000);
    return () => clearInterval(intervalSun);
  }, [movedSun]);

  React.useEffect(() => {
    const intervalCloud = setInterval(() => {
      setMovedCloud((p) => !p);
    }, 1500);
    return () => clearInterval(intervalCloud);
  }, [movedCloud]);

  return (
    <>
      {loading ? (
        <LoadingInitialBox />
      ) : (
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
                Location
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="overline" display="block" gutterBottom>
                Time
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
                  37°
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  Cloudy
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Day: 12° ⋅ Night: 17°
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
              <Box
                className={`${classes.sun} ${movedSun ? classes.sunMoved : ""}`}
                onClick={handleMoveSun}
              >
                <LightModeSharpIcon
                  sx={{ fontSize: 140, color: yellow[500] }}
                />
              </Box>
              <Box
                className={`${classes.cloud} ${
                  movedCloud ? classes.cloudMoved : ""
                }`}
                onClick={handleMoveCloud}
              >
                <CloudSharpIcon
                  sx={{
                    fontSize: 100,
                    color: grey[300],
                  }}
                />
                <CloudSharpIcon
                  sx={{
                    fontSize: 100,
                    color: grey[300],
                  }}
                />
                <CloudSharpIcon
                  sx={{
                    fontSize: 100,
                    color: grey[300],
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      )}
    </>
  );
}

const useStyles = makeStyles({
  cloud: {
    position: "absolute",
    top: "300px",
    right: "600px",
    transition: "all 2s ease-in-out",
  },
  cloudMoved: {
    right: "200px",
  },
  sun: {
    position: "absolute",
    top: "250px",
    right: "600px",
    transition: "all 1.5s ease-in-out",
  },
  sunMoved: {
    right: "200px",
  },
});
