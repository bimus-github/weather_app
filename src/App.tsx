import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import TodayPage from "./pages/today/TodayPage";
import { useDispatch, useSelector } from "react-redux";
import { useGetCityInfoQuery } from "./store/servers/weatherCoreApi";

import { setCityInfo, setIsLoading } from "./store/features/weatherReducer";
import { Location } from "./models";
import { RootState } from "./store";
import HourlyPage from "./pages/hourly/HourlyToday";

function App() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState<string>("tashkent");
  const {
    isLoading: { isCity, isCurrent, isHourly, isToday },
  } = useSelector((s: RootState) => s.weather);
  const { data: cityData, isFetching: cityLoad } =
    useGetCityInfoQuery(cityName);

  const city: Location = {
    id: cityData?.locations[0]?.id,
    name: cityData?.locations[0]?.name,
    country: cityData?.locations[0]?.country,
  };

  useEffect(() => {
    dispatch(setCityInfo(city));
    dispatch(setIsLoading({ isCity: cityLoad, isCurrent, isHourly, isToday }));
  }, [cityName, cityLoad]);

  return (
    <div className="App">
      <Header
        setCityName={setCityName}
        children={
          <Routes>
            <Route path="/" element={<div>'/' ={">"} page</div>} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/yesterday" element={<div>Yesterday</div>} />
            <Route path="/tomorrow" element={<div>Tomorrow</div>} />
            <Route path="/hourly" element={<HourlyPage />} />
            <Route path="/severe" element={<div>Severe</div>} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
