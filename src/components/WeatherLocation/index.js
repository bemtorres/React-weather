import React , {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
 
const location ="Santiago,cl";
const api_key = "dab0117ff85c4b6234172aae16325bbb";
const api_wather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;
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
    // ----  2
    // ultimas versiones no es necesario el contructor se puede hacer asi simple 
    // state = {
    //     city: 'Santiago',
    //     data: data1
    // }

    // creando un modelo de la api a obj
    getWeatherState = weather =>{
        // return SUN;
        console.log(weather);
        return 'sun';
    }
    getData = (weather_data) =>{
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        // const weatherState = this.getWeatherState(this.weather);
        const weatherState = weather_data.weather[0].main;

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }


    handlerUpdateClick = () =>{
        fetch(api_wather)
        .then( resp => {
            return resp.json();
        }).then(weather_data =>{
            const data = this.getData(weather_data);
            this.setState({data});
            console.log(weather_data);
        });
        // this.setState({
        //     city : 'Calera de tango',
        //     data : data2
        // });
        // console.log("actualizado");
    }

    
    render = () => {
        const {city, data} = this.state;
        return(
            <div className="weatherLocation">
                <Location city={city}/>
                <WeatherData props={data}/>            
                <button onClick={ this.handlerUpdateClick }>Actualizar</button>
            </div>
        );
    };
    // ---- render 2
    // render = () => (
    //     <div className="weatherLocation">
    //         <Location city={this.state.city}/>
    //         <WeatherData props={this.state.data}/>            
    //         <button onClick={ this.handlerUpdateClick }>Actualizar</button>
    //     </div>
    // );
};

// ** arrow function
// const WeatherLocation = () => (
//     <div className="weatherLocation">
//         <Location city={'Calera de Tango'}/>
//         <WeatherData props={data}/>
//     </div>
// )

export default WeatherLocation;