import { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton'

import './HeaderSearch.scss'

const HeaderSearch = () => {

    const [cityData, setCityData] = useState('');

    const urlGetCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityData}&appid=${process.env.REACT_APP_API_KEY}`
    

    const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    

    return(
        <div className="search-bar">
            <input
            onChange={(e) => setCityData(e.target.value)}
            type="text" 
            id='city'
            placeholder='Enter a city...'/>
            <SearchButton 
            urlSearch={urlSearch}
            urlGetCity={urlGetCity}
            cityData={cityData}
            />
        </div>
    )
}

export default HeaderSearch