import React, { createContext, useEffect, useState } from 'react'

import Axios from 'axios'
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const FetchContext = createContext();

const FetchContextProvider = ({children, watch, settings}) => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    lat: '',
    lon: '',
  });
  const [currentWeather, setCurrentWeather] = useState({
    feels_like: '',
  });
  const [cities, setCities] = useState([]);
  const { latitude,longitude } = useCurrentLocation(watch, settings);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
      'X-RapidAPI-Key': '00d5212dd3msh0014f21a2ef2e81p12823djsn2865f7fe8644',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  const loadData = async () => {
    try 
    {
      setLoading(true);
      const response = await Axios(url);
      const cityresponse = await Axios(options);
      const wdata = await response.data;
      const cdata = await cityresponse.data.data;
      setData(wdata);
      setCities(cdata);
      setCurrentWeather(wdata.current);
    }
    catch (error) {
      console.log(error);
    } 
    finally 
    {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    latitude && longitude && cities
    ? loadData() 
    : setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return (
    <FetchContext.Provider
    value={{
      loading, 
      data,
      currentWeather,
      cities
      }}>
    {children}
    </FetchContext.Provider>
  )
}


export {FetchContextProvider, FetchContext}