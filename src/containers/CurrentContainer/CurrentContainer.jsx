import { useFetch } from '../../shared/hooks/useFetch';
import './CurrentContainer.scss'

import TodayWeatherDetails from '../../components/TodayWeatherDetails/TodayWeatherDetails';

const CurrentContainer = () => {
  const { cityName, locationData, searchData } = useFetch();


  return (
    <div className='current-container'>
        <h2>Today's Weather in { !cityName ? "Your Location" : cityName }</h2>
        <TodayWeatherDetails 
        searchData={searchData}
        locationData={locationData}
        />
    </div>
  )
}

export default CurrentContainer