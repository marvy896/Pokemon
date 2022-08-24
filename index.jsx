import React from "react"
import {createRoot} from "react-dom/client"


const root = createRoot( document.getElementById("root"))
root.render(<h1>Hello world!</h1>)
'https://pokeapi.co/api/v2/pokemon/'
let tableElement =  document.querySelector('table')
fetch('https://pokeapi.co/api/v2/pokemon/').then(value =>{
    (value.json().then( value2 => {
        console.log(value2)
        tableElement.innerHTML = tableElement.innerHTML + value2.results.map( x => `
        <tr>
            <th> ${x.name}</th>
            <th>${x.url}</th>
        </tr>`).join('')
    }))
})



