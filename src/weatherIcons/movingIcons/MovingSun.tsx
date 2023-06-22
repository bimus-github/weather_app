import React from "react";
import { Box } from "@mui/material";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { yellow } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";

export default function () {
  const classes = useStyles();
  const [movedSun, setMovedSun] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMovedSun((p) => !p);
    }, 1500);
    return () => clearInterval(interval);
  }, [movedSun]);

  return (
    <Box className={`${classes.sun} ${movedSun ? classes.sunMoved : ""}`}>
      <LightModeSharpIcon sx={{ fontSize: 140, color: yellow[500] }} />{" "}
    </Box>
  );
}

const useStyles = makeStyles({
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
