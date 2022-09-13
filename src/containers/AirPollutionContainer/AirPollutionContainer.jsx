import PollutionBox from '../../components/PollutionBox/PollutionBox';
import './AirPollutionContainer.scss';

const AirPollutionContainer = () => {

  return (
    <div className='air-pollution-container'>
        <h2 className='air-heading'>Air Quality Index</h2>
        <PollutionBox/>
    </div>
  )
}

export default AirPollutionContainer