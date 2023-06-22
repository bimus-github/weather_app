import { Skeleton, Box, Stack, Grid } from "@mui/material";

export default function LoadingMiddleBox() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: 400,
        backgroundColor: "#82e8fa",
        borderRadius: 5,
        padding: 1,
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
        <Grid item xs={10}>
          <Skeleton variant="text" animation="wave" height={20} width={150} />
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
        <Grid item xs={2.5}>
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Box>
              <Skeleton
                variant="circular"
                animation="wave"
                height={100}
                width={100}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                height={80}
                width={80}
              />
            </Box>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Skeleton
                variant="circular"
                animation="wave"
                height={10}
                width={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={20}
                width={30}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={0.5}>
          <Skeleton variant="text" animation="wave" height={300} width={5} />
        </Grid>

        <Grid item xs={2.5}>
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Box>
              <Skeleton
                variant="circular"
                animation="wave"
                height={100}
                width={100}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                height={80}
                width={80}
              />
            </Box>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Skeleton
                variant="circular"
                animation="wave"
                height={10}
                width={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={20}
                width={30}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={0.5}>
          <Skeleton variant="text" animation="wave" height={300} width={5} />
        </Grid>

        <Grid item xs={2.5}>
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Box>
              <Skeleton
                variant="circular"
                animation="wave"
                height={100}
                width={100}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                height={80}
                width={80}
              />
            </Box>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Skeleton
                variant="circular"
                animation="wave"
                height={10}
                width={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={20}
                width={30}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={0.5}>
          <Skeleton variant="text" animation="wave" height={300} width={5} />
        </Grid>

        <Grid item xs={2.5}>
          <Stack
            spacing={1}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Skeleton variant="text" animation="wave" height={20} width={150} />
            <Box>
              <Skeleton
                variant="circular"
                animation="wave"
                height={100}
                width={100}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                height={80}
                width={80}
              />
            </Box>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Skeleton
                variant="circular"
                animation="wave"
                height={10}
                width={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={20}
                width={30}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
