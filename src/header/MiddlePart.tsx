import { useEffect } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentData, setIsLoading } from "../store/features/weatherReducer";
import { RootState } from "../store";
import Item from "./components/Item";
import { useGetCurrentWeatherQuery } from "../store/servers/weatherCoreApi";

const MiddlePart = () => {
  const dispatch = useDispatch();
  const {
    cityInfo,
    isLoading: { isCity, isCurrent, isHourly, isToday },
    currentData,
  } = useSelector((state: RootState) => state.weather);

  const { data: current, isFetching: loadCurrent } = useGetCurrentWeatherQuery(
    cityInfo?.id
  );

  useEffect(() => {
    dispatch(setCurrentData(current?.current));
    dispatch(
      setIsLoading({ isCity, isCurrent: loadCurrent, isHourly, isToday })
    );
  }, []);

  // console.log(current);

  if (isCity || isCurrent) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ background: "white" }}>
          <Grid item xs={5}>
            <Skeleton variant="text" animation="wave" height={20} width={150} />
          </Grid>
          <Grid item xs={7}></Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ background: "white" }}>
        <Grid item xs={5}>
          <Item>
            {cityInfo?.name}. {cityInfo?.country} | {currentData?.temperature}°
          </Item>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </Box>
  );
};

export default MiddlePart;
