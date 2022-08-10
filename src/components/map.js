import React from 'react';
import { GoogleMap, LoadScript  } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  float:'right',
  paddingLeft: '100px'
};


function Map(props) {

  const center = {
    lat: props.latitude,
    lng: props.longitude
  };
  

  return (
    <div>
      <LoadScript
      googleMapsApiKey="AIzaSyDn4HxPq6qJdtb5LUT5WzZNKl1xtVSus9M"
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