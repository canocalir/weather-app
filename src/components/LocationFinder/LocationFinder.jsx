import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'


import './LocationFinder.scss'

const LocationFinder = () => {
  return (
    <button id='location'>
        <FontAwesomeIcon icon={faLocationCrosshairs} />
    </button>
  )
}

export default LocationFinder