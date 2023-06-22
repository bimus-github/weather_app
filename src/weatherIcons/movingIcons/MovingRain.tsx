import React from "react";
import { Box } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";

export default function () {
  const classes = useStyles();
  const [movedRain, setMovedRain] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMovedRain((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, [movedRain]);

  return (
    <Box className={`${classes.rain} ${movedRain ? classes.rainMoved : ""}`}>
      <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
      <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
      <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
      <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
      <GrainIcon sx={{ fontSize: 50, color: blue[500] }} />
    </Box>
  );
}

const useStyles = makeStyles({
  rain: {
    position: "absolute",
    top: "380px",
    right: "600px",
    transition: "all 2s ease-in-out",
  },
  rainMoved: {
    right: "230px",
  },
});
