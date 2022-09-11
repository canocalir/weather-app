import React, { createContext, useEffect, useState } from "react";

import Axios from "axios";
import { useCurrentLocation } from "../hooks/useCurrentLocation";

const FetchContext = createContext();

const FetchContextProvider = ({ children, watch, settings }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    lat: "",
    lon: "",
  });
  const [locationData, setLocationData] = useState({
    temp: "",
    wind_speed: "",
  });

  const [searchData, setSearchData] = useState({
    main: {
      temp: "",
    },
    wind: {
      speed: "",
    },
  });

  const [cityName, setCityName] = useState("");

  const { latitude, longitude } = useCurrentLocation(watch, settings);

  const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await Axios(urlWeather);

      const wdata = await response.data;

      setData(wdata);

      setLocationData(wdata.current);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    latitude && longitude ? loadData() : setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return (
    <FetchContext.Provider
      value={{
        loading,
        data,
        locationData,
        setSearchData,
        searchData,
        cityName,
        setCityName,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export { FetchContextProvider, FetchContext };
