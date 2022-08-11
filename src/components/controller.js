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
          const filterTable = searchSpecificLoaction(e.target.value,"poastalCode")
          setTablefilter([...filterTable])
          const filterTableLocation = searchSpecificLoaction(e.target.value,"specificPoastalCode")
              if (filterTableLocation.length == 1 ){
                setSearchedLocation(...[filterTable])
              } 
      }
        else{
            setZoom(constants.ZOOM.ZOOMOUT);
            setValue(e.target.value)
            console.log(value.length)
            setDatasource([...datasource])
        }
  }
 
  function searchSpecificLoaction(searchValue,operation){
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


  // View
  return (
    <div>
      <Map cordinates={searchedLocation} zoom={zoom} value={value} />
      <InputSearchbox value={value} filterDatafunc={filter} />
      <Table value={value} tablefilter={tablefilter} datasource={datasource}/> 
    </div>
  );
}

export default Controller;