import React from 'react';
import {constants} from '../constant'

function table(props) {

  const inputSearchValue = props.value
  const filteredTabledata = props.tablefilter
  const postaldata = props.datasource

  return (
    <div>      
  <table class="table">
    <thead>
      <tr>
        <th scope="col">{constants.COLUMNAMES.columnOne}</th>
        <th scope="col">{constants.COLUMNAMES.columnTwo}</th>
        <th scope="col">{constants.COLUMNAMES.columnThree}</th>
        <th scope="col">{constants.COLUMNAMES.columnFour}</th>
      </tr>
    </thead>
    <tbody>
    {inputSearchValue.length > 0 ? filteredTabledata.map((data) => {
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
    postaldata.map((data) => {
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

export default table;