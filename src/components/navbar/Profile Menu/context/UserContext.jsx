import React, {useState} from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [password, setPassword] = useState(null)

    return <Context.Provider value={{password, setPassword}}>
        {children}
    </Context.Provider>
}

export default Context