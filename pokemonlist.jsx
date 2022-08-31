import React, { useEffect, useState } from "react";
import Table from "./Table";
import LIST from "./Table/LIST";
import getImages from './getImages'
let TABLE_HEADERS = ["Url", "Name",];
let datakeys = ["url", "name"];


export default function pokemonlist() {
  let [tabledata, setTableData] = useState([]);

  useEffect(() => {
   getImages().then(data =>{
      setTableData(data)
      console.log(data)
   }).catch(error=>{
console.log(error)
   })
  }, []);
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then((tabledata) => tabledata.json())
//       .then((item) => {
//         console.log(item);
//         setTableData(item.results);
//       })
//       .catch((err) => {
//         console.log("Error fetching data", err);
//       });
//   }, []);
  return (
    <div className="list">
      {tabledata.map((list, index) => (
        <LIST key={index} value={list} />
      ))}
    </div>
  );
}
