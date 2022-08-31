import React from "react";
import "./list.css";

export default function LIST({ name, img, url }) {

  return (
    <div className="listItems" onClick={() => {alert(url)}} >
      <img src={img} />
      <div className="values">{name}</div>
    </div>
  );
}
