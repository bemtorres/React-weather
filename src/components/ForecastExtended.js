import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForescastItem';

const days  =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];
const data = {
    temperature: -10,
    weatherState: "Clouds",
    humidity: 100,
    wind: '200 m/s'
};


class ForecastExtended  extends Component {


    renderForecastItemDays(){
        return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}  />));
    }


    render(){
        
        const {city} = this.props;
        
        return(
            <div>
                <h2 className='forecast-title'>Información Data {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForecastExtended;