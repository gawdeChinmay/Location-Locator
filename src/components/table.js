import React from 'react';
import { useState } from 'react';
import WorldPoastalCode from '../World Postal Codes.json';
import { postalData } from "../data";

function Table(props) {

  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(postalData); 
  const [tablefilter, setTablefilter] = useState([]); 

  const filterData = (e) =>{
     if(e.target.value != ""){
      setValue(e.target.value);
     const filterTable = datasource.filter(o=> Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTablefilter([...filterTable])
      //filterdata has data for wat we have search.
      
      }
      else{
          setValue(e.target.value)
          setDatasource([...datasource])
      }
    }
  
  return (
    <div>
       <div>
         <input type = "text" value={value} onChange = {filterData}/>
       </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">city</th>
      <th scope="col">country</th>
      <th scope="col">latitude</th>
      <th scope="col">longitude</th>
    </tr>
  </thead>
  <tbody>
   {value.length > 0 ? tablefilter.map((data) => {
       return(
            <tr>
              <td>{data.city}</td>
              <td>{data.country}</td>
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
           <td>{data.country}</td>
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

export default Table;