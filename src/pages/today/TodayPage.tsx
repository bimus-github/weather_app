import { Box, Stack } from "@mui/material";

import InitialBox from "./components/InitialBox";
import MiddleBox from "./components/MiddleBox";
import LowBox from "./components/LowBox";

export default function TodayPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <InitialBox />

        <MiddleBox />

        <LowBox />
      </Stack>
    </Box>
  );
}
