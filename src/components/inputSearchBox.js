import React from 'react';

function inputSearchBox(props) {
  return (
    <div>
       <input style = {styles} type ="text" value={props.valueOfSearchBox} onChange = {props.filterDatafunc} placeholder= "Enter postal code"/>
    </div>
  );
}

const styles = {
  width: "40%",
  padding: "12px 20px",
  margin: "8px",
  backgroundColor: "#ffff",
  border: "3px solid #555",
  textAlign:"center"
};

export default inputSearchBox;
