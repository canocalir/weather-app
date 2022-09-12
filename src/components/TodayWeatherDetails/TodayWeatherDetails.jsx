import './TodayWeatherDetails.scss'

const TodayWeatherDetails = ({ todayWeather, searchData }) => {
  return (
    <div className="current">
      <p className='current__degree'>
        <span>Temperature:</span> {!searchData.temp ? Math.round(todayWeather.temp) : Math.round(searchData.temp)}°C
      </p>
      <p className="current__wind">
        <span>Wind:</span> {!searchData.wind_speed ? todayWeather.wind_speed: searchData.wind_speed} m/s
      </p>
    </div>
  )
}

export default TodayWeatherDetails