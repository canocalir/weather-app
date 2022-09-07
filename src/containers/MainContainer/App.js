import WeatherCard from '../../components/WeatherCard'
import '../../styles/main.scss'
import CurrentContainer from '../CurrentContainer/CurrentContainer';

function App() {
  return (
    <div className="main-container">
      <WeatherCard/>
      <CurrentContainer/>
    </div>
  );
}

export default App;
