import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList  = () => (   
    <div>
        <WeatherLocation city={'Santiago,cl'}/>
        <WeatherLocation city={'Calera de Tango,cl'}/>
        <WeatherLocation city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Bogotá,col'}/>
    </div>

)

export default LocationList;