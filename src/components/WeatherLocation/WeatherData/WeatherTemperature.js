import React from 'react';
import { WiDaySunny, WiDaySnowThunderstorm, WiCloudy, WiDaySleet, WiRain, WiDaySnowWind, WiAlien } from "weather-icons-react";
import PropTypes from 'prop-types';

const getWeatherIcon = (weatherState) => {
    const size = 60;
    switch (weatherState) {
        case "Thunderstorm":
            return  (<WiDaySnowThunderstorm className='icon' size={size}/>);
        case "Drizzle":
            return  (<WiDaySleet className='icon' size={size}/>);
        case "Rain":
            return  (<WiRain className='icon' size={size}/>);
        case "Snow":
            return  (<WiDaySnowWind className='icon' size={size}/>);
        case "Clear":
            return  (<WiDaySunny className='icon' size={size}/>);
        case "Clouds":
            return (<WiCloudy className='icon' size={size} />);    
        default:
            return (<WiAlien className='icon' size={size} />);
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