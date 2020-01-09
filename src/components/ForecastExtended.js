import React, {Component} from 'react';
import PropTypes from 'prop-types';




class ForecastExtended  extends Component {
    render(){
        
        const {city} = this.props;
        
        return(
            <div>Información Data {city}</div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForecastExtended;