import React from 'react';


export function Column(props) {
  return (

    

    <div className="Column">
      <div className="Column__title">{props.title}</div>
      <div className="Card__Container">
        {props.children}
      </div>
    </div>
  );
}
