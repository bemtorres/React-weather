import React, {Component} from 'react';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './app.css';
import { Paper, Toolbar, AppBar, IconButton } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Santiago,cl',
  'Calera de Tango,cl',
  'Buenos Aires,ar',
  'Bogotá,col'
];

class App extends Component {

  constructor(){
    super();
    this.state = {city:null};
  }


  handleSelectedLocation = city =>{
    this.setState({city});

    console.log(city);
  }

  render(){
      return (
        <div>
          <Grid>
            <Row>
              <Col xs={12} md={12}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    El Tiempo
                  </IconButton>
                </Toolbar>
              </AppBar>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>    
              </Col>   
              <Col xs={12} md={6}>
                <Paper elevation={4} />
                  <div className='detail'>
                      <ForecastExtended city={this.state.city} />
                  </div>
                <Paper />
              </Col>     
            </Row>
          </Grid>        
        </div>
      );
    }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"> 
//         <LocationList cities={cities}></LocationList>    
//       </header>   
//     </div>
//   );
// }

export default App;
