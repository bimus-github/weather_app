import React from "react";
import { Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { makeStyles } from "@material-ui/core/styles";

export default function () {
  const classes = useStyles();
  const [movedMoon, setMovedMoon] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMovedMoon((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, [movedMoon]);

  return (
    <Box className={`${classes?.moon} ${movedMoon ? classes?.moonMoved : ""}`}>
      <CircleIcon sx={{ fontSize: 140, color: "#FFF" }} />
    </Box>
  );
}

const useStyles = makeStyles({
  moon: {
    position: "absolute",
    top: "250px",
    right: "600px",
    transition: "all 1.5s ease-in-out",
  },
  moonMoved: {
    right: "200px",
  },
});
