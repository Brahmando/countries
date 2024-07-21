import { Link } from "react-router-dom";


export default function CountryCard({namee,flag,population,region,capitol,data}) {
 



  return (
    
    <Link className="country-card" to={`${namee}`} state={data}>
          <img src={flag} alt={namee + 'flag'}/>
          <div className="card-text">
              <h3 className="card-title">{namee}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capitol}</p>
          </div>
  </Link>
  
  )
}
