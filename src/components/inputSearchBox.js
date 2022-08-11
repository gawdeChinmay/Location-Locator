import React from 'react';

const styles = {
  width: "40%",
  padding: "12px 20px",
  margin: "8px",
  backgroundColor: "#ffff",
  border: "3px solid #555"
};

function inputSearchBox(props) {
  return (
    <div>
       <input style = {styles} type ="text" value={props.value} onChange = {props.filterDatafunc} placeholder= "Enter postal code"/>
    </div>
  );
}

export default inputSearchBox;
