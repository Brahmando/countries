import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";





export default function SearchFilter({oninput,setRegion}) {

  

  



  return (
    
    <div className="search-filter-container">
        <Searchbar oninput={oninput}/>
        <SelectMenu setRegion={setRegion}/>
      </div>
      
    
  )
}
