import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading';
import LoadingContainer from './LoadingContainer';
import './Country.css'
import { Link, useLocation, useParams } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

export default function Country() {
  const[dark]=useContext(ThemeContext)
 
  
  // const countryName = new URLSearchParams(location.search).get('name');
  const params = useParams();
  // console.log(params)

  const states=useLocation()
    console.log(states)
  
  const countryName= params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound,setNotFound]= useState(false)
  // const [borders,setBorders] = useState(null);

  // console.log(countryData?.borders)


  function updateCountry(data){
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString('en-IN'),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.tld.join(', '),
      languages: Object.values(data.languages).join(', '),
      currencies: Object.values(data.currencies).map((currency) => currency.name).join(', '),
      currencySymbol: Object.values(data.currencies).map((currency) => currency.symbol).join(', '),
      flag: data.flags.svg,
      // borders: ['India','Bhutan','Nepal'],
      borders: []

    })

    if(!data.borders){
      console.log(data)
    data.borders= []

    }
    
    Promise.all(data.borders.map((border) => {
    
      return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=> res.json())
      .then(([borderCountry])=>borderCountry.name.common)

      

    })).then((borders)=> setCountryData((prevState)=> ({...prevState, borders})))
  }
  

  useEffect(() => {

    if(states.state===null){
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data)
        // console.log(Object.values(data.currencies).map((currency) => currency.name))

        // console.log('hi')
        // console.log(data)

        updateCountry(data)

      }).catch((err)=>{
        console.log(err)

        setNotFound(true)
      })
    }else{
      data=states.state;

      updateCountry(data)
    }

    
    
  }, [countryName])

  if(notFound){
    return <div>Country Not Found. Check the Country Name: <b>{countryName}</b> </div>
  }
  return (
    countryData === null ? <LoadingContainer/> :
      <main className={`${dark ? 'dark' : ''}`}>
        <div className="country-details-container">
          <span className="back-button" onClick={()=> history.back() }>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt="" />
            <div className="details-text-container">
              <h3 title='name'>{countryData.name}</h3>
              <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                <p>
                  <b>Top Level Domain: </b><span className="top-level-domain">{countryData.topLevelDomain}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{countryData.currencies + ' (' +countryData.currencySymbol+ ')'}</span></p>
                <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
              </div>
              {countryData.borders.length!==0 && 
                <div className="border-countries">Border Countries: {countryData.borders.map((border)=> <Link key={border} to={`/${border}`}><b>{border}</b></Link> )}&nbsp;</div>}
            </div>
          </div>
        </div>
      </main>
  )
}
