import React from "react";
import "./list.css";
import { Link} from 'react-router-dom';


export default function LIST({ name, img, url, id}) {
  return (
     <Link to={`/character/${id}`} className="listItems">
      <img src={img} />
      <div className="values">{name}</div>
      <div>{url}</div>
      </Link>
  );
}
