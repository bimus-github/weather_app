import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Item from "./components/Item";

const MiddlePart = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ background: "white" }}>
        <Grid item xs={5}>
          <Item>City Temperature</Item>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </Box>
  );
};

export default MiddlePart;
