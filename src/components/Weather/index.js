import React, { useState } from 'react';
import WeatherApp from './weatherApp';

const App = () => {
    const [cityName, setCityName] = useState('');

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    };

    return (
        <div className="container mt-5">
            <input
                type="text"
                placeholder="Enter city name"
                value={cityName}
                onChange={handleInputChange}
            />
            <WeatherApp cityName={cityName} />
        </div>
    );
};

export default App;
