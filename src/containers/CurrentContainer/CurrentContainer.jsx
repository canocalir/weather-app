import { useFetch } from '../../shared/hooks/useFetch';
import './CurrentContainer.scss'

import TodayWeatherDetails from '../../components/TodayWeatherDetails/TodayWeatherDetails';

const CurrentContainer = () => {
  const { cityName, todayWeather, searchData } = useFetch();


  return (
    <div className='current-container'>
        <h2>Today's Weather in { !cityName ? "Your Location" : cityName }</h2>
        <TodayWeatherDetails 
        searchData={searchData}
        todayWeather={todayWeather}
        />
    </div>
  )
}

export default CurrentContainer