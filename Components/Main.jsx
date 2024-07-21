import { useContext, useState } from "react";
import CountryContainer from "./CountryContainer";

import SearchFilter from "./SearchFilter";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";



export default function Main() {

  const[dark]=useContext(ThemeContext)
console.log(useContext(ThemeContext))
  
  const [query, setQuery] = useState('')
  const [region,setRegion] = useState('')


  return (
    <main className={`${dark ? 'dark' : ''}`}>
    <SearchFilter setRegion={setRegion} oninput={setQuery}/>
    
    <CountryContainer  region={region} filtered={query}/>
    </main>
    

  )
}
