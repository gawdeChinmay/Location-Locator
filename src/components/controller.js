import React from 'react';
import { useState } from 'react';
import { postalData } from "../data";
import Map from "./map";
import InputSearchbox from './inputSearchBox';
import Table from './table';
import {constants} from '../constant'

function Controller() {
// Model
  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(postalData); 
  const [tablefilter, setTablefilter] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState([{city: 'Dan Makham Tia', postalCode: '71260', latitude: 13.8494172, longitude: 99.408315}]);  
  const [zoom, setZoom] = useState(constants.ZOOM.INITIIALZOOM);

//controller
// Filters the search string respective set Zoom value
  const filter = (e) =>{
    if(e.target.value != ""){
      setZoom(constants.ZOOM.ZOOMIN);
      setValue(e.target.value);
     const filterTable = datasource.filter(function(ele){
        return (String(ele.postalCode).toLowerCase().includes(e.target.value.toLowerCase()) ||
        String(ele.postalCode).toLowerCase() === (e.target.value.toLowerCase())
        )
     });
      setTablefilter([...filterTable])
      const filterTableLocation = datasource.filter(function(ele){
        return (String(ele.postalCode).toLowerCase().includes(e.target.value.toLowerCase()) &&
        String(ele.postalCode).toLowerCase() === (e.target.value.toLowerCase())
        )
     });
      if (filterTableLocation.length == 1 ){
        setSearchedLocation(...[filterTable])
      } 
      }
      else{
          setZoom(constants.ZOOM.ZOOMOUT);
          setValue(e.target.value)
          setDatasource([...datasource])
      }
  }
 


  
  // Views
  return (
    <div>
      <Map cordinates={searchedLocation} zoom={zoom} />
      {/* <InputSearchbox value={value} filterDatafunc={filterData} /> */}
      <InputSearchbox value={value} filterDatafunc={filter} />
      <Table value={value} tablefilter={tablefilter} datasource={datasource}/> 
    </div>
  );
}

export default Controller;