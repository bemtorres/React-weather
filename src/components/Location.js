import React from 'react';

const Location = (props) => {
    // const city = props.city;
    const {city} = props; //destructuring
   return(
    <div><h1>{ city }</h1></div>
   );
};

export default Location;