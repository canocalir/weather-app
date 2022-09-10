import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'


import './LocationFinder.scss'
import Axios from 'axios';
import { useFetch } from '../../shared/hooks/useFetch';



const LocationFinder = ( { urlSearch } ) => {

  const { searchData, setSearchData } = useFetch()

  const citySearch = async () => {
  const cityresponse = await Axios(urlSearch);
  const cdata = await cityresponse.data;
  console.log(cdata)
  setSearchData(cdata);
  }

  return (
    <button 
    onClick={citySearch}
    id='location'>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
    </button>
  )
}

export default LocationFinder