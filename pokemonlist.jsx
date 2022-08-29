import React, { useEffect, useState } from "react";
import Table from "./Table";
import List from "./list"

let TABLE_HEADERS = [ "Url", "Name"];
let datakeys =["url", "name"];

export default function pokemonlist() {
  let [tabledata, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((tabledata) => tabledata.json())
      .then((item) => {
        console.log(item);
        setTableData(item.results);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  return (
    <div>
      <Table headers={TABLE_HEADERS} tabledata={tabledata} datakeys={datakeys} />
    </div>
  );
}

// 'https://pokeapi.co/api/v2/pokemon/'
// let tableElement =  document.querySelector('table')
// fetch('https://pokeapi.co/api/v2/pokemon/').then(value =>{
//     (value.json().then( value2 => {
//         console.log(value2)
//         tableElement.innerHTML = tableElement.innerHTML + value2.results.map( x => `
//         <tr>
//             <th> ${x.name}</th>
//             <th>${x.url}</th>
//         </tr>`).join('')
//     }))
// })
