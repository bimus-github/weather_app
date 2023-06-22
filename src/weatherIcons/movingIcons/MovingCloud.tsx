import React from "react";
import { Box } from "@mui/material";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export default function () {
  const classes = useStyles();
  const [movedCloud, setMovedCloud] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMovedCloud((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, [movedCloud]);

  return (
    <Box className={`${classes.cloud} ${movedCloud ? classes.cloudMoved : ""}`}>
      <CloudSharpIcon sx={{ fontSize: 100, color: grey[300] }} />
      <CloudSharpIcon sx={{ fontSize: 100, color: grey[300] }} />
      <CloudSharpIcon sx={{ fontSize: 100, color: grey[300] }} />
    </Box>
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
});
