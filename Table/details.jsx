import React, { useEffect, useState } from "react";
import "./list.css";

export default function Detail() {
  let [detailData, setDetailData] = useState([]);
  useEffect(() => {
     fetch("https://pokeapi.co/api/v2/pokemon-species/132")
      .then((detailData) => detailData.json())
      .then((val) => {
        console.log(val);
        setDetailData(val.genera);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);
  function MoreDetails({ genus, language }) {
    return (
      <>
        <div>{genus}</div>
        <div>{language}</div>
      </>
    );
  }
  return (
    <div className="list">
      {detailData.map((list, index,) => (
        <MoreDetails key={index} genus={list.genus} language={list.language} />
      ))}
    </div>
  );
}
