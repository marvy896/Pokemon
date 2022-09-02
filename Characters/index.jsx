import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
let BASE_URL = "https://pokeapi.co/api/v2/pokemon-species/";

export default function index() {
  let [state, setState] = useState([]);
  let { characterId } = useParams();
  useEffect(() => {
    fetch(BASE_URL + characterId)
      .then((detailData) => detailData.json())
      .then((val) => {
        console.log(val);
        setState(val);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, [characterId]);

  return (
    <div>
      <h1>Pokemon Character</h1>
      <div className="character">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${characterId}.svg`}
      ></img>
      <div className="Character-list">
        <p>
          base happiness: <br />
          {state.base_happiness}
        </p>
        <p>
          capture_rate:
          <br />
          {state.capture_rate}
        </p>
        <p>
        generation: <br/>
        {state.generation?.name}
        </p>
        {state &&
          state.egg_groups?.map((eggGroup, index) => (
            <div key={index}>
              <p>
                Name:
                <br /> {eggGroup.name}
              </p>
            </div>
          ))}
          <p>
        evolution_chain: <br/>
        {state.habitat?.name}
        </p>
        <p>
        growth_rate:
        <br/>
        {state.growth_rate?.name}
        </p>
        <p>
        shape:
        <br/>
        {state.shape?.name}
        </p>
        
          </div>
        {/* <pre>
      {JSON.stringify(state, null, 2)}
      </pre> */}
      </div>
    </div>
  );
}
