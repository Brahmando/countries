
import CountryCard from "./CountryCard";


// import CountriesData from '../CountriesData'
import { useEffect, useState } from "react";



export default function CountryContainer({ filtered, region }) {
    

    const [countriesData, setCountriesData] = useState([])

    useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountriesData(data)
            console.log(data);
            
          })

    },[])
    
    const card = countriesData.filter((country) => {

        return country.region.includes(region)
    })

        .filter((country) => {

            return country.name?.common.toLowerCase().includes(filtered)
        })

        .map((country) => {

            return <CountryCard data={country} key={country.name.common} capitol={country?.capital} region={country.region} population={country.population.toLocaleString('en-IN')} flag={country.flags.svg} namee={country.name.common} />
        })

       
        if(countriesData.length===0)
        return <div>Loading..</div>


    return (
        <div className="countries-container">

            {card}

        </div>
    )
}
