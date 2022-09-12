import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert";

import "./SearchButton.scss";
import Axios from "axios";
import { useFetch } from "../../shared/hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const SearchButton = ({ urlGetCity , cityData, handleClick }) => {
  const { setSearchData, setCityName, setSearchForecast, setSearchAir } = useFetch();
  
  const [ clocation, setClocation ] = useState({
    lat: null,
    lon: null
  })

  const urlSearch = `https://api.openweathermap.org/data/2.5/onecall?lat=${clocation.lat}&lon=${clocation.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const urlAirSearch = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${clocation.lat}&lon=${clocation.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  
  useEffect(() => {
    if(cityData !== ''){
    const getCity = async () => {
      const locationresponse = await Axios(urlGetCity);
      const ldata = await locationresponse.data;
      setClocation({
        lat: ldata[0].lat || null,
        lon: ldata[0].lon || null,
      })
    }
    getCity();
  }}, [cityData])

  const citySearch = async () => {
    try {
      const cityresponse = await Axios(urlSearch);
      const airresponse = await Axios(urlAirSearch);
      const cdata = await cityresponse.data;
      const adata = await airresponse.data;
      setSearchData(cdata.current);
      setSearchForecast(cdata.daily);
      setCityName(cityData);
      setSearchAir(adata.list[0].components.no2);
    } catch (error) {
      Swal("Oops", "You must Enter a Valid City Name", "error");
    }
  };

  const onClickHandler = () => {
    citySearch();
    handleClick();
  }

  return (
    <button onClick={onClickHandler} id="location">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
