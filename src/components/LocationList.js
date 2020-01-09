import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponent = cities => (
    // cities.map( city => ( <WeatherLocation city={city} /> ) )    
    
    // cities.map( (city, index ) => ( <WeatherLocation city={city} key={index}/> ) )   
    
    cities.map( city => ( <WeatherLocation city={city} key={city}/> ) )   
);


const LocationList  = ({ cities }) => (   
    <div>
        {strToComponent(cities)}
        {/* <WeatherLocation city={'Santiago,cl'}/> */}
    </div>

)
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;