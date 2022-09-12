import { faSun, faMoon, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ForecastBox.scss'

const ForecastBox = ({day}) => {
  return (
    <div className='box'>
      <div className='box__temp'>
      <p className='box__day-temp'>
      <FontAwesomeIcon icon={faSun} />
        {Math.round(day.temp.day)}°C
        
      </p>
      <p className='box__night-temp'>
      <FontAwesomeIcon icon={faMoon} />
        {Math.round(day.temp.night)}
      </p>
      <p className='box__wind-speed'>
      <FontAwesomeIcon icon={faWind} />
        {day.wind_speed}
      </p>
      </div>
    </div>
  )
}

export default ForecastBox