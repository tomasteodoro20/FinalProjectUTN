import { useCallback, useContext } from "react";
import Context from "./UserContext";

export default function useUser () {
    const {password, setPassword} = useContext(Context)

    const login = useCallback(() => {
        setPassword('test')
    }, [setPassword])

    const logout = useCallback(() => (
        setPassword(null)
    ), [setPassword])

    return {
        isLogged: Boolean(password),
        login, 
        logout
    }
}