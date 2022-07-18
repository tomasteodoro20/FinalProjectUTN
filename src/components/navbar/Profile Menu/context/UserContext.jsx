import React, {useState} from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [password, setPassword] = useState(
        () => window.sessionStorage.getItem('password')
        )

    return <Context.Provider value={{password, setPassword}}>
        {children}
    </Context.Provider>
}

export default Context