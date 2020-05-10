import React from "react";

import "./CounterControl.css";

const CounterControl = (props) => {
  return (
    <button className="btn btn-primary m-5" onClick={props.clicked}>
      {props.label}
    </button>
  );
};

export default CounterControl;
