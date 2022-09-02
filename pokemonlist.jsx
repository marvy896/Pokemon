import React, { useEffect, useState } from "react";
import Table from "./Table";
import LIST from "./Table/LIST";
import Detail from "./Table/details";

// import getImages from './getImages'
// let TABLE_HEADERS = ["Url", "Name", ];
// let datakeys = ["url", "name"];


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
 /**@param {string} URL */
  function GetIDimages(URL ){
   let idImages = URL.split("/")[6]
  return idImages
   //https://pokeapi.co/api/v2/pokemon/2/
}
function imgURL(idImages){
   return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idImages}.svg`
}
// console.log(imgURL(2))
GetIDimages("https://pokeapi.co/api/v2/pokemon/2/")
  return (
    <div className="list">
      {tabledata.map((list, index) => (
        <LIST key={index} name={list.name} img ={imgURL(GetIDimages(list.url))} id={GetIDimages(list.url)}/>
      ))}
    </div>
  );
}






