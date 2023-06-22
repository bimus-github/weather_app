import { Skeleton, Stack, Grid, Box } from "@mui/material";

export default function LoadingLowBox() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: 600,
        backgroundColor: "#82e8fa",
        borderRadius: 5,
        padding: 1,
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
        <Grid item xs={0.5} />
        <Grid item xs={10}>
          <Skeleton variant="text" animation="wave" height={20} width={150} />
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "100%",
          padding: 1,
        }}
        container
        spacing={1}
      >
        <Grid item xs={0.5} />
        <Grid item xs={5.5}>
          <Skeleton variant="text" animation="wave" height={40} width={50} />
          <Skeleton variant="text" animation="wave" height={20} width={150} />
        </Grid>
        <Grid item xs={5.5}>
          <Grid spacing={1} container>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <Skeleton
                variant="circular"
                animation="wave"
                height={200}
                width={200}
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyItems="center"
              >
                <Skeleton
                  variant="circular"
                  animation="wave"
                  height={30}
                  width={30}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={20}
                  width={50}
                />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyItems="center"
              >
                <Skeleton
                  variant="circular"
                  animation="wave"
                  height={30}
                  width={30}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={20}
                  width={50}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0.5} />
      </Grid>

      <Grid container>
        {[...Array(8)]?.map((type, i) => (
          <Grid
            item
            xs={6}
            style={{
              height: 40,
              padding: 1,
              marginTop: 3,
              marginBottom: 3,
            }}
            key={i}
          >
            <Stack
              spacing={2}
              flexDirection="row"
              alignItems="center"
              justifyItems="center"
              display="flex"
              borderTop={1}
              justifyContent="space-between"
              style={{ paddingLeft: "10px", paddingRight: "5px" }}
            >
              <Box
                alignItems="center"
                justifyItems="center"
                display="flex"
                width={150}
                justifyContent="space-between"
              >
                <Skeleton
                  variant="circular"
                  animation="wave"
                  height={30}
                  width={30}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  height={20}
                  width={50}
                />
              </Box>
              <Skeleton
                variant="text"
                animation="wave"
                height={20}
                width={50}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
