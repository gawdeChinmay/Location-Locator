import React from 'react';
import { GoogleMap, LoadScript,MarkerF  } from '@react-google-maps/api';
import {constants} from '../constants/constant'

function Map(props) {

  const center = {
    lat: props.cordinates[0].latitude,
    lng: props.cordinates[0].longitude
  };
  const zoom = props.zoom
  const valueSearchBox = props.valueSearchBox 

  return (
    <div >
      <LoadScript
      googleMapsApiKey = {constants.googleMapApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        { valueSearchBox.length > 0 ? <MarkerF position={center} /> : null }
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

const containerStyle = {
  width: '400px',
  height: '400px',
  padding: "19px 50px",
  margin: "8px",
  border: "3px ",
  marginBottom: "200px"
};

export default Map;