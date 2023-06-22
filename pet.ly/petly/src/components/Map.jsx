import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, GoogleMap } from 'google-maps-react';
import { useLocation } from 'react-router-dom';
import SinglePerson from './SinglePerson';

const mapStyles = {
  width: '500px',
  height: '500px'
};

var mlat;
var long;

export class MapContainer extends Component {

    
    componentDidUpdate(){
        mlat = this.props.lat;
        long = this.props.lng;
        
    }
  render() {
    
    console.log(this.props.lat, this.props.lng);
    mlat = this.props.lat;
    long = this.props.lng;
    console.log(mlat,long);
    return (
        <div>
        
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
            {
              lat: mlat,
              lng: long
            }
          }>
          <Marker position={{ lat: mlat, lng: long }} />
          
      </Map>
        </div>
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDWPZoUnQSz86EonrDFUzHcKx56x53_o9U'
})(MapContainer);