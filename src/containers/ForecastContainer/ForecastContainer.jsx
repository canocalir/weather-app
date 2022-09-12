
import ForecastBox from '../../components/ForecastBox/ForecastBox'
import { useFetch } from '../../shared/hooks/useFetch'
import './ForecastContainer.scss'

const ForecastContainer = () => {

  const { forecastWeather, searchForecast } = useFetch()

  const threeDaysForecast = forecastWeather.slice(1, 4)
  const threeDaysSearchForecast = searchForecast.slice(1, 4)

  return (
    <div className='forecast-container'>
        <h2>3 Day Forecast</h2>
        <div className='forecast-container__box-container'>
        {searchForecast.length
        ? threeDaysSearchForecast.map((day, index) => ( <ForecastBox key={index} day={day} />
        )) 
        : threeDaysForecast.map((day, index) => (
          <ForecastBox key={index} day={day} />
        ))
        }
        </div>
    </div>
  )
}

export default ForecastContainer