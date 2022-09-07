import '../../styles/main.scss'
import AirPollutionContainer from '../AirPollutionContainer/AirPollutionContainer';
import CurrentContainer from '../CurrentContainer/CurrentContainer';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import PrecipitationContainer from '../PrecipitationContainer/PrecipitationContainer';

function App() {
  return (
    <div className="main-container">
      <HeaderContainer/>
      <CurrentContainer/>
      <AirPollutionContainer/>
      <PrecipitationContainer/>
    </div>
  );
}

export default App;
