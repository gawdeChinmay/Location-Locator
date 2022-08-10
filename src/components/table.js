import React from 'react';
import { useState } from 'react';

function Table(props) {

  const dummyData = [
    {"city":"Dikwa","country":"Nigeria","latitude":12.0419812,"longitude":13.9172992},
    {"city":"Sparks","country":"United States","postalCode":"89436","latitude":39.603484,"longitude":-119.7078532},
    {"city":"Trondheim","country":"Norway","postalCode":"7042","latitude":63.4388688,"longitude":10.4232348},
    {"city":"New York City","country":"United States","postalCode":"10150","latitude":40.7582228,"longitude":-73.9704871},
    {"city":"Luniao","country":"China","latitude":30.4700383,"longitude":119.784181},
    {"city":"Letsheng","country":"Botswana","latitude":-22.6700589,"longitude":27.225321},
    {"city":"Rosso","country":"Mauritania","latitude":16.5163413,"longitude":-15.802612},
    {"city":"Zhelin","country":"China","latitude":29.2642495,"longitude":115.3133908}
  ]

  const [value , setValue] = useState('');
  const [datasource, setDatasource] = useState(dummyData); 
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