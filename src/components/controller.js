import React from 'react';
import { useState } from 'react';
import { postalData } from "../data";
import Map from "./map";
import InputSearchbox from './inputSearchBox';

function Controller(props) {
// model
  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(postalData); 
  const [tablefilter, setTablefilter] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState([]);  

//controller
  const filterData = (e) =>{
     if(e.target.value != ""){
      setValue(e.target.value);
     const filterTable = datasource.filter(o=> Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter([...filterTable])
      //filterdata has data for wat we have search.
      if (filterTable.length == 1){
        setSearchedLocation(...[filterTable])
      } 
      }
      else{
          setValue(e.target.value)
          setDatasource([...datasource])
      }
    }
  
  return (
    <div>
      
      <InputSearchbox value={value} filterDatafunc={filterData} />
      <Map cordinates={searchedLocation} />
             
      <table class="table">
  <thead>
    <tr>
      <th scope="col">city</th>
      <th scope="col">PostalCode</th>
      <th scope="col">latitude</th>
      <th scope="col">longitude</th>
    </tr>
  </thead>
  <tbody>
   {value.length > 0 ? tablefilter.map((data) => {
       return(
            <tr>
              <td>{data.city}</td>
              <td>{data.postalCode}</td>
              <td>{data.latitude}</td>
              <td>{data.longitude}</td>
            </tr>
       )

   })
  :
  datasource.map((data) => {
    return(
         <tr>
           <td>{data.city}</td>
           <td>{data.postalCode}</td>
           <td>{data.latitude}</td>
           <td>{data.longitude}</td>
         </tr>
    )

})
  

  }

  </tbody>
</table>
      
    </div>
  );
}

export default Controller;