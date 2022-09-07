import LocationFinder from '../LocationFinder/LocationFinder'
import './HeaderSearch.scss'

const HeaderSearch = () => {
    return(
        <div className="search-bar">
            <input 
            type="text" 
            id='city'
            placeholder='Enter a city...'/>
            <LocationFinder/>
        </div>
    )
}

export default HeaderSearch