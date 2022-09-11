import './TodayWeatherDetails.scss'

const TodayWeatherDetails = ({ locationData, searchData }) => {
console.log(locationData)
  return (
    <div className="current">
      <p className='current__degree'>
        <span>Temperature:</span> {!searchData.main.temp ? locationData.temp: searchData.main.temp}°C
      </p>
      <p className="current__wind">
        <span>Wind:</span> {!searchData.wind.speed ? locationData.wind_speed: searchData.wind.speed} m/s
      </p>
    </div>
  )
}

export default TodayWeatherDetails