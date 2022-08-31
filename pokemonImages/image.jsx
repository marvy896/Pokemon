import Table from "./Table";
import LIST from "./Table/LIST";

let imgItems = [
    {
      id: "balbasur",
      image: require("./pokemonImages/balbasur.png"),
    },
    {
      id: "Beedrill",
      image: require("./pokemonImages/Beedrill.png"),
    },
    {
      id: "Blastoise",
      image: require("./pokemonImages/Blastoise.png"),
    },
    {
      id: "Butterfree",
      image: require("./pokemonImages/Butterfree.png"),
    },
    {
      id: "carterpie",
      image: require("./pokemonImages/carterpii.png"),
    
    },
     {
       id: "Charizard",
       image: require("./pokemonImages/Charizard.png"),
     
     },
     {
       id: "Charmander",
       image: require("./pokemonImages/Charmander.jpg"),
     
     },
     {
       id: "Charmeleon",
       image: require("./pokemonImages/Charmeleon.jpg"),
     
     },
     {
       id: "Ivysaur",
       image: require("./pokemonImages/Ivysaur.png"),
     
     },
     {
       id: "Kakuna",
       image: require("./pokemonImages/Kakuna.png"),
     
     },
     {
       id: "Metapod",
       image: require("./pokemonImages/Metapod.png"),
     
     },
     {
       id: "Pidgeo",
       image: require("./pokemonImages/Pidgeo.png"),
     
     },
     {
       id: "Pidgeotto",
       image: require("./pokemonImages/Pidgeotto.png"),
     
     },
     {
       id: "Pidgey",
       image: require("./pokemonImages/Pidgey.png"),
     
     },
     {
       id: "Raticate",
       image: require("./pokemonImages/Raticate.png"),
     
     },
     {
       id: "Rattata",
       image: require("./pokemonImages/Rattata.png"),
     
     },
     {
       id: "Squirtle",
       image: require("./pokemonImages/Squirtle.png"),
     
     },
     {
       id: "Venusaur",
       image: require("./pokemonImages/Venusaur.png"),
     
     },
     {
       id: "Wartortle",
       image: require("./pokemonImages/Wartortle.png"),
     
     },
     {
       id: "Weedle",
       image: require("./pokemonImages/Weedle.png"),
     
     },
  ];
 
  export default function Image(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
          resolve(imgItems)
       }, 3000)
    })
  }
 