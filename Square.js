import React, { Component, useState } from 'react';

export default function Square (props){
 // const [value, setValue] = useState(props.value);
 const className = props.className + ' square';
  return (
      <button className={className} onClick={props.onClick}>
        {props.value}
      </button>
    );
}