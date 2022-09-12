import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert";

import "./SearchButton.scss";
import Axios from "axios";
import { useFetch } from "../../shared/hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const SearchButton = ({ urlGetCity , cityData}) => {
  const { setSearchData, setCityName } = useFetch();
  
  const [ clocation, setClocation ] = useState({
    lat: '',
    lon: ''
  })

  const urlSearch = `https://api.openweathermap.org/data/2.5/onecall?lat=${clocation.lat}&lon=${clocation.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const getCity = async () => {
      const locationresponse = await Axios(urlGetCity);
      const ldata = await locationresponse.data;
      setClocation({
        lat: ldata[0].lat,
        lon: ldata[0].lon,
      })
    }
    getCity();
  }, [cityData])

  const citySearch = async () => {
    try {
      const cityresponse = await Axios(urlSearch);
      const cdata = await cityresponse.data;
      setSearchData(cdata.current);
      setCityName(cityData);
    } catch (error) {
      Swal("Oops", "You must Enter a Valid City Name", "error");
    }
  };

  return (
    <button onClick={citySearch} id="location">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
