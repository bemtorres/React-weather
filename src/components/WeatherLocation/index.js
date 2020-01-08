import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';


const WeatherLocation = () => (
    <div className="weatherLocation">
        <Location city={'Calera de Tango'}/>
        <WeatherData />
    </div>
)

export default WeatherLocation;