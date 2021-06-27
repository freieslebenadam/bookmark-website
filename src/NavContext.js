import React, {useState} from 'react'
const Context = React.createContext()

function NavContextProvider({children}) {
    const [navShown, setNavShown] = useState(false)

    function toggleNav() {
        setNavShown(prev => !prev)
    }

    return (
        <Context.Provider value={{navShown, toggleNav}}>
            {children}
        </Context.Provider>
    )
}

export {NavContextProvider, Context}