import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

const data = {
    temperature: 10,
    weatherState: "cloud",
    humidity: 100,
    wind: '200 m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocation">
        <Location city={'Calera de Tango'}/>
        <WeatherData props={data}/>
    </div>
)

export default WeatherLocation;