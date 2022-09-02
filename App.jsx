import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./navbar"
import Character from './Characters'
import PokemonList from "./pokemonlist"

export default function App (){
    return(
        <Router>
      <Navbar />  
        <Routes>
            <Route index path="/" element={<PokemonList />}/>
            <Route path="/character/:characterId" element={<Character />}/>
        </Routes>
        </Router>
    )
}
