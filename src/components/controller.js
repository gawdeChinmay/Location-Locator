import React from 'react';
import { useState } from 'react';
import { postalData } from "../data";
import Map from "./map";
import InputSearchbox from './inputSearchBox';
import Table from './table';

function Controller(props) {
// Model
  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(postalData); 
  const [tablefilter, setTablefilter] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState([{city: 'Dan Makham Tia', postalCode: '71260', latitude: 13.8494172, longitude: 99.408315}]);  

//controller
  const filterData = (e) =>{
     if(e.target.value != ""){
      setValue(e.target.value);
     const filterTable = datasource.filter(o=> Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter([...filterTable])
      if (filterTable.length == 1){
        setSearchedLocation(...[filterTable])
      } 
      }
      else{
          setValue(e.target.value)
          setDatasource([...datasource])
      }
    }
  
  // Views
  return (
    <div>
      <Map cordinates={searchedLocation} />
      <InputSearchbox value={value} filterDatafunc={filterData} />
      <Table value={value} tablefilter={tablefilter} datasource={datasource}/> 
    </div>
  );
}

export default Controller;