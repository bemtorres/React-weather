import React from 'react';
import { WiDaySunny, WiHail } from "weather-icons-react";
import PropTypes from 'prop-types';

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case "cloud":
            return (<WiHail className='icon' size={60} />);    
        default:
            return (<WiDaySunny className='icon' size={60} color='#fff' />);
    }
};

const WeatherTemperature = ({temperature,weatherState}) => {
    // const  {temperature, weatherState } = props;
    return ( <div className='weatherTemperatureCont'>       
        { getWeatherIcon(weatherState) }
        <span className='temperature'>{temperature}</span>
        <span className='temperaturetype'>C°</span>
    </div>);
};

WeatherTemperature.propTypes  = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string
};

export default WeatherTemperature;