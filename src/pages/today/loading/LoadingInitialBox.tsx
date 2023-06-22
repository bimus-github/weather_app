import { Skeleton, Stack, Grid } from "@mui/material";

export default function LoadingInitialBox() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: 300,
        background: "#82e8fa",
        padding: 1,
        borderRadius: 5,
        "&:hover": {
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
          <Skeleton variant="text" animation="wave" height={20} width={150} />
        </Grid>
        <Grid item xs={2}>
          <Skeleton variant="text" animation="wave" height={20} width={150} />
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
            <Skeleton variant="text" animation="wave" height={80} width={200} />
            <Skeleton variant="text" animation="wave" height={20} width={200} />
            <Skeleton variant="text" animation="wave" height={40} width={200} />
          </Stack>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Skeleton
            variant="circular"
            animation="wave"
            height={200}
            width={200}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
