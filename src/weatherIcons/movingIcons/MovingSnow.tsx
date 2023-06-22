import React from "react";
import { Box } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";

export default function () {
  const classes = useStyles();
  const [movedSnow, setMovedSnow] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMovedSnow((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, [movedSnow]);

  return (
    <Box className={`${classes?.snow} ${movedSnow ? classes?.snowMoved : ""}`}>
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
      <AcUnitIcon sx={{ fontSize: 20, color: "#fff" }} />
    </Box>
  );
}

const useStyles = makeStyles({
  snow: {
    position: "absolute",
    top: "385px",
    right: "600px",
    transition: "all 2s ease-in-out",
  },
  snowMoved: {
    right: "240px",
  },
});
