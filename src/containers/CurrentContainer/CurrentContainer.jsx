import { useFetch } from '../../shared/hooks/useFetch';
import './CurrentContainer.scss'

const CurrentContainer = () => {

  const { currentWeather } = useFetch();

  

  return (
    <div className='current-container'>
        <h2>Today's Weather</h2>
        <p>{Math.round(currentWeather.feels_like)}</p> 
    </div>
  )
}

export default CurrentContainer