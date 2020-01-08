import React , {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

const data1 = {
    temperature: 10,
    weatherState: "cloud",
    humidity: 100,
    wind: '200 m/s'
};
const data2 = {
    temperature: -10,
    weatherState: "cloud",
    humidity: 100,
    wind: '200 m/s'
};

class WeatherLocation extends Component{ 

    constructor(){
        super();
        // this.state = data1;
        this.state = {
            city: 'Santiago',
            data: data1
        }
    }

    handlerUpdateClick = () =>{
        this.setState({
            city : 'Calera de tango',
            data : data2
        });
        console.log("actualizado");
    }

    render = () => (
        <div className="weatherLocation">
            <Location city={this.state.city}/>
            <WeatherData props={this.state.data}/>            
            <button onClick={ this.handlerUpdateClick }>Actualizar</button>
        </div>
    );
};

// ** arrow function
// const WeatherLocation = () => (
//     <div className="weatherLocation">
//         <Location city={'Calera de Tango'}/>
//         <WeatherData props={data}/>
//     </div>
// )

export default WeatherLocation;