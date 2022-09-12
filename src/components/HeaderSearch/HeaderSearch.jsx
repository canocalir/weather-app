import { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton'

import './HeaderSearch.scss'

const HeaderSearch = () => {

    const [cityData, setCityData] = useState('');

    const urlGetCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityData}&appid=${process.env.REACT_APP_API_KEY}`
    

    const urlSearch = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    const handleChange = (e) => {
        setCityData(e.target.value)
    }

    const handleClick = () => {
        setCityData('')
    }
    

    return(
        <div className="search-bar">
            <input
            onChange={handleChange}
            value={cityData}
            type="text" 
            id='city'
            placeholder='Enter a city...'/>
            <SearchButton 
            urlSearch={urlSearch}
            urlGetCity={urlGetCity}
            cityData={cityData}
            handleClick={handleClick}
            />
        </div>
    )
}

export default HeaderSearch