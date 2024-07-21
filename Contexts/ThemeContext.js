
import { createContext, useState } from "react";


export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    console.log((children))

    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')) ?? false)

    return (
        <ThemeContext.Provider value={[dark, setDark]}>
        {children}
        </ThemeContext.Provider>
    )
}