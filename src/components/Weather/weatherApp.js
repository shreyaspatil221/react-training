import React, { useEffect, useState } from 'react';

const WeatherApp = ({ cityName }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '138fe08b0f96fdb26e26108b1b5a2db4';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                // if (response.ok) {
                data && setWeatherData(data);
                // } else {
                //     setError(`Error: ${data.message}`);
                // }
            } catch (error) {
                setError('Error fetching weather data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cityName]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!weatherData) {
        return null;
    }

    const { main, weather } = weatherData;

    return (
        <div className="container mt-5">
            <h2>Weather in {cityName}</h2>
            <p>Temperature: {main?.temp} °C</p>
            <p>Weather: {weather && weather[0]?.description}</p>
        </div>
    );
};

export default WeatherApp;
