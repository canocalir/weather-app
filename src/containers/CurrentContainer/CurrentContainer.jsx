import { useFetch } from '../../shared/hooks/useFetch';
import './CurrentContainer.scss'

import TodayWeatherDetails from '../../components/TodayWeatherDetails/TodayWeatherDetails';

const CurrentContainer = () => {
  const { cityName, todayWeather, searchData } = useFetch();

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div className='current-container'>
        <h2>Today's Weather in { !cityName ? "Your Location" : capitalize(cityName) }</h2>
        <TodayWeatherDetails 
        searchData={searchData}
        todayWeather={todayWeather}
        />
    </div>
  )
}

export default CurrentContainer