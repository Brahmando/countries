import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";



export default function Header() {

  const theme=useContext(ThemeContext)
  const[dark, setDark]= theme;

  console.log('header rendering')
  






  return (
    <header className= {`header-container ${dark? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setDark(!dark)
          localStorage.setItem('isDarkMode', !dark)
        }

        }>
          <i className={`fa-regular fa-${!dark ? 'moon' : 'sun'}`} >
          </i>
          &nbsp;&nbsp;{`${dark ? 'Light' : 'Dark'}`} Mode</p>
      </div>
    </header>
  )
}
