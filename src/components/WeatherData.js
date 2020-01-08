import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={30} weatherState={'summer'}/>
        <WeatherExtraInfo humidity={100} wind={'10 m/s'} />
    </div>
);

export default WeatherData;