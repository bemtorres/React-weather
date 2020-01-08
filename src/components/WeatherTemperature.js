import React from 'react';
import { WiDaySunny, WiHail } from "weather-icons-react";
import PropTypes from 'prop-types';

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case "cloud":
            return (<WiHail size={30} />);    
        default:
            return (<WiDaySunny size={30} color='#fff' />);
    }
};

const WeatherTemperature = ({temperature,weatherState}) => {
    // const  {temperature, weatherState } = props;
    return ( <div>       
        { getWeatherIcon(weatherState) }
        <span>{temperature} C°</span>
    </div>);
};

WeatherTemperature.propTypes  = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};

export default WeatherTemperature;