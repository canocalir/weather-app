//Styles
import "../../styles/main.scss";

//Containers
import AirPollutionContainer from "../AirPollutionContainer/AirPollutionContainer";
import CurrentContainer from "../CurrentContainer/CurrentContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import ForecastContainer from "../ForecastContainer/ForecastContainer";

//Components
import Loader from "../../components/Loader/Loader";

//CustomHooks
import { useFetch } from "../../shared/hooks/useFetch";

const App = () => {

  const { loading } = useFetch();

  return (
    <div className="main-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderContainer />
          <CurrentContainer />
          <AirPollutionContainer />
          <ForecastContainer />
        </>
      )}
    </div>
  );
};

export default App;
