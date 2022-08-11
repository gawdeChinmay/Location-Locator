import React from 'react';
import { useState } from 'react';
import { postalData } from "../fixtures/data";
import Map from "./map";
import InputSearchbox from './inputSearchBox';
import Table from './table';
import {constants} from '../constants/constant';

function Controller() {
// Model
  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(postalData); 
  const [tablefilter, setTablefilter] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState([{city: 'Dan Makham Tia', postalCode: '71260', latitude: 13.8494172, longitude: 99.408315}]);  
  const [zoom, setZoom] = useState(constants.ZOOM.initialZoom);

//Controller
// Filters data according to searched string 
  function filter (e){
    if(e.target.value != ""){
          //Filtered data is stored for rendering Table and Map  
          setZoom(constants.ZOOM.zoomIn);
          setValue(e.target.value);
          const filterTable = postalCodes(e.target.value,"poastalCode")
          setTablefilter([...filterTable])
          const filterTableLocation = postalCodes(e.target.value,"specificPoastalCode")
              if (filterTableLocation.length == 1 ){
                //specific data cordinates is stored for rendering map
                setSearchedLocation(...[filterTable])
              } 
      }
        else{
          //Fixture data is stored for rendering Table and Map
            setZoom(constants.ZOOM.zoomOut);
            setValue(e.target.value)
            setDatasource([...datasource])
        }
  }
 
  function postalCodes(searchValue,operation){
    switch(operation) {
      case "specificPoastalCode":
        return datasource.filter(function(ele){
          return (String(ele.postalCode).toLowerCase().includes(searchValue.toLowerCase()) &&
          String(ele.postalCode).toLowerCase() === (searchValue.toLowerCase())
          )
       });

      case "poastalCode":
        return datasource.filter(function(ele){
          return (String(ele.postalCode).toLowerCase().includes(searchValue.toLowerCase()) ||
          String(ele.postalCode).toLowerCase() === (searchValue.toLowerCase())
          )
       })
    }    
  }


  // Views
  return (
    <div>
      <Map cordinates={searchedLocation} zoom={zoom} valueSearchBox={value} />
      <InputSearchbox valueOfSearchBox={value} filterDatafunc={filter} />
      <Table valueSearchBox={value} tablefilter={tablefilter} datasource={datasource}/> 
    </div>
  );
}

export default Controller;