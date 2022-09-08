import React, { createContext, useEffect, useState } from 'react'

import Axios from 'axios'
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const FetchContext = createContext()

const FetchContextProvider = ({children, watch, settings}) => {

  const [loading, setLoading] = useState(false);
  const [fetchedData, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);

  const { latitude,longitude,timestamp,accuracy,speed,heading,
    error } = useCurrentLocation(watch, settings);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await Axios(url);
      const wdata = await response.data;
      setData(wdata);
      setCurrentWeather(wdata.current);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    loadData();
  }, [latitude, longitude]);

  return (
    <FetchContext.Provider
    value={{
      loading, 
      fetchedData,
      currentWeather,
      }}>
    {children}
    </FetchContext.Provider>
  )
}


export {FetchContextProvider, FetchContext}