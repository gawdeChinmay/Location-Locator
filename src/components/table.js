import React from 'react';
import {constants} from '../constants/constant'

const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#FFE4C4",
    padding: "0 2em",   
  },
  section2: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#ffff",
    backgroundColor: "#DEB887",
    padding: "0 2em",   
  },
  section3: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#ffff",
    padding: "0 2em",   
  }
};

function table(props) {

  const inputSearchValue = props.value
  const filteredTabledata = props.tablefilter
  const postaldata = props.datasource

  return (
    <div  >      
  <table style={styles.section} >
    <thead>
      <tr style={styles.section2} >
        <th scope="col">{constants.COLUMNAMES.columnOne}</th>
        <th scope="col">{constants.COLUMNAMES.columnTwo}</th>
        <th scope="col">{constants.COLUMNAMES.columnThree}</th>
        <th scope="col">{constants.COLUMNAMES.columnFour}</th>
      </tr>
    </thead>
    <tbody>
    {inputSearchValue.length > 0 ? filteredTabledata.map((data) => {
        return(
              <tr key = {data.id} style={styles.section3}>
                <td >{data.city}</td>
                <td >{data.postalCode}</td>
                <td >{data.latitude}</td>
                <td >{data.longitude}</td>
              </tr>
        )

    })
    :
    postaldata.map((data) => {
      return(
          <tr key = {data.id} style={styles.section3}>
            <td >{data.city}</td>
            <td >{data.postalCode}</td>
            <td >{data.latitude}</td>
            <td >{data.longitude}</td>
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