import React from 'react';
import LocationList from './components/LocationList';

const cities = [
  'Santiago,cl',
  'Calera de Tango,cl',
  'Buenos Aires,ar',
  'Bogotá,col'
];

class App extends React.Component {

  handleSelectedLocation = city =>{
    console.log(city);
  };

  render(){
      return (
        <div className="App">
          <header className="App-header"> 
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>    
          </header>   
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
