import { useFetch } from '../../shared/hooks/useFetch';
import './PollutionBox.scss';

const PollutionBox = () => {
    const { airByLocation, searchAir } = useFetch();

  return (
    <div className='air-box'>
        <div className={
            airByLocation || searchAir <= 50 
            ? 'air-box__aqi-green'
            : airByLocation || searchAir <= 100
            ? 'air-box__aqi-yellow'
            : airByLocation || searchAir <= 150
            ? 'air-box__aqi-orange'
            : airByLocation || searchAir <= 200
            ? 'air-box__aqi-red'
            : airByLocation || searchAir <= 300
            ? 'air-box__aqi-purple'
            : 'air-box__aqi-maroon'
        }>
        <h2>{airByLocation 
        ? Math.round(airByLocation)
        : Math.round(searchAir)
        }</h2>
        <h3>
            {
            airByLocation || searchAir <= 50 ? 'Good' :
            airByLocation || searchAir <= 100 ? 'Moderate' :
            airByLocation || searchAir <= 150 ? 'Unhealthy-for-sensitive-groups' :
            airByLocation || searchAir <= 200 ? 'Unhealthy' :
            airByLocation || searchAir <= 300 ? 'Very-unhealthy' :
            'Hazardous'
        }</h3>
        </div>
    </div>
  )
}

export default PollutionBox