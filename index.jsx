import React from "react"
import {createRoot} from "react-dom/client"
import PokemonList from "./pokemonlist"
import { Navbar } from "./navbar"


const root = createRoot( document.getElementById("root"))
const nav2 = createRoot( document.getElementById("nav2"))
nav2.render(<Navbar></Navbar>)
root.render(<PokemonList></PokemonList>)





