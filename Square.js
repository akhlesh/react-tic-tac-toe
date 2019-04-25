import React, { Component, useState } from 'react';

export default function Square (props){
 // const [value, setValue] = useState(props.value);
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}