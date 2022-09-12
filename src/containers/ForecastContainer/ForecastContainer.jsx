
import ForecastBox from '../../components/ForecastBox/ForecastBox'
import { useFetch } from '../../shared/hooks/useFetch'
import './ForecastContainer.scss'

const ForecastContainer = () => {

  const { forecastWeather } = useFetch()

  const threeDaysForecast = forecastWeather.slice(1, 4)

  return (
    <div className='forecast-container'>
        <h2>3 Day Forecast</h2>
        <div className='forecast-container__box-container'>
        {threeDaysForecast.map((day, index) => (
          <ForecastBox key={index} day={day} />
        ))}
        </div>
    </div>
  )
}

export default ForecastContainer