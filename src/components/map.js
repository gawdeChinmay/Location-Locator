import React from 'react';
import { GoogleMap, LoadScript  } from '@react-google-maps/api';
import {constants} from '../constant'

const containerStyle = {
  width: '400px',
  height: '400px',
  float:'right',
  paddingLeft: '100px'
};


function Map(props) {

  const center = {
    lat: props.cordinates[0].latitude,
    lng: props.cordinates[0].longitude
  };
  

  return (
    <div>
      <LoadScript
      googleMapsApiKey = {constants.GOOGLEMAPAPIKEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default Map;