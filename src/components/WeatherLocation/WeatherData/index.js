import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({props}) => {
    const {temperature,weatherState,humidity,wind}  = props;
    return (
        <div className='weatherDataCont'>
            <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

WeatherData.propTypes = {
    props : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired
    }),
    
};


// const WeatherData = () => (
//     <div className='weatherDataCont'>
//         <WeatherTemperature temperature={30} weatherState={'summer'}/>
//         <WeatherExtraInfo humidity={100} wind={'10 m/s'} />
//     </div>
// );

export default WeatherData;