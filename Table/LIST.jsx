import React from "react";
import "./list.css";

export default function LIST({ value }) {

  return (
    <div className="listItems" onClick={() => {alert(value.id)}} >
      <img src={value.image} />
      <div className="values">{value.id}</div>
    </div>
  );
}
