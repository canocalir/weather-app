import { useFetch } from '../../shared/hooks/useFetch';
import './PollutionBox.scss';

const PollutionBox = () => {
    const { airByLocation, searchAir } = useFetch();
  return (
    <div className='air-box'>
        <div className={
            airByLocation === 1 || searchAir === 1 
            ? 'air-box__aqi-green'
            : airByLocation === 2 || searchAir === 2
            ? 'air-box__aqi-yellow'
            : airByLocation === 3 || searchAir === 3
            ? 'air-box__aqi-orange'
            : airByLocation === 4 || searchAir === 4
            ? 'air-box__aqi-red'
            : airByLocation === 5 || searchAir === 5
            ? 'air-box__aqi-purple'
            : 'air-box__aqi-maroon'
        }>
        <h2>{
        searchAir.length >= 0
        ? Math.round(airByLocation)
        : Math.round(searchAir)
        }</h2>
        <h3>
            {
            airByLocation === 1 || searchAir === 1 ? 'Good' :
            airByLocation === 2 || searchAir === 2 ? 'Moderate' :
            airByLocation === 3 || searchAir === 3 ? 'Unhealthy-for-sensitive-groups' :
            airByLocation === 4 || searchAir === 4 ? 'Unhealthy' :
            airByLocation === 5 || searchAir === 5 ? 'Very-unhealthy' :
            'Hazardous'
        }</h3>
        </div>
    </div>
  )
}

export default PollutionBox