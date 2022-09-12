import './TodayWeatherDetails.scss'

const TodayWeatherDetails = ({ todayWeather, searchData }) => {
  return (
    <div className="current">
      <p className='current__degree'>
        <span>Temperature:</span> {!searchData.main.temp ? Math.round(todayWeather.temp) : Math.round(searchData.main.temp)}°C
      </p>
      <p className="current__wind">
        <span>Wind:</span> {!searchData.wind.speed ? todayWeather.wind_speed: searchData.wind.speed} m/s
      </p>
    </div>
  )
}

export default TodayWeatherDetails