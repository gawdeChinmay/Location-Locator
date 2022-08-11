import React from 'react';

function inputSearchBox(props) {
  return (
    <div>
       <input type ="text" value={props.value} onChange = {props.filterDatafunc}/>
    </div>
  );
}

export default inputSearchBox;
