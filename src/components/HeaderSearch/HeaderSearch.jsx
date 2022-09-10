import { useState } from 'react';
import LocationFinder from '../LocationFinder/LocationFinder'

import './HeaderSearch.scss'

const HeaderSearch = () => {

    const [cityData, setCityData] = useState('');
    

    const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    return(
        <div className="search-bar">
            <input
            onChange={(e) => setCityData(e.target.value)}
            type="text" 
            id='city'
            placeholder='Enter a city...'/>
            <LocationFinder 
            urlSearch={urlSearch}
            />
        </div>
    )
}

export default HeaderSearch