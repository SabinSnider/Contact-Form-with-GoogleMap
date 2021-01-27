import React, { Component } from 'react';
import { Map,  GoogleApiWrapper} from 'google-maps-react';

const mapStyle = {
    width : '100%',
    height : '100%'
};

class GMap extends Component{
    render(){
        return(
            <div className="Map">
                Google Map Location
                <Map
                 google={this.props.google}
                 zoom={10}
                 style={mapStyle}
                 initialCenter={
                     {
                        lat: 27.712020,
                        lng: 85.312950
                     }
                 }

                 />
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCg-vCeLx0mtUrwk6FOQP7TAhw6Js4ijC4')
})(GMap);