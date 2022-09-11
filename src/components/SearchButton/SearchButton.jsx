import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert";

import "./SearchButton.scss";
import Axios from "axios";
import { useFetch } from "../../shared/hooks/useFetch";

const SearchButton = ({ urlSearch }) => {
  const { setSearchData, setCityName } = useFetch();

  const citySearch = async () => {
    try {
      const cityresponse = await Axios(urlSearch);
      const cdata = await cityresponse.data;
      setSearchData(cdata);
      setCityName(cdata.name);
    } catch (error) {
      Swal("Oops", "You must Enter a Valid City Name", "error");
    }
  };

  return (
    <button onClick={citySearch} id="location">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  );
};

export default SearchButton;
