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
  const filterData = (e) =>{
     if(e.target.value != ""){
      setZoom(constants.ZOOM.ZOOMIN);
      setValue(e.target.value);
     const filterTable = datasource.filter(o=> Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter([...filterTable])
      if (filterTable.length == 1){
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
      <InputSearchbox value={value} filterDatafunc={filterData} />
      <Table value={value} tablefilter={tablefilter} datasource={datasource}/> 
    </div>
  );
}

export default Controller;