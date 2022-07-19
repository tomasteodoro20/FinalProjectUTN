import { useCallback, useContext } from "react";
import loginService from "../../../login/service/login-service";
import Context from "./UserContext";

export default function useUser () {
    const {email, setEmail} = useContext(Context)

    const login = useCallback((email) => {
        // loginService({email})
        // .then(email => {
            window.sessionStorage.setItem('email', email)
            setEmail(email)
    },[setEmail])
    // .catch(err => {
    //     window.sessionStorage.removeItem(email)
    //     console.error(err)
    // })
     

    const logout = useCallback(() => {
        setEmail(null)
        window.sessionStorage.removeItem('email')
    }, [setEmail])

    return {
        isLogged: Boolean(email),
        login,
        logout
    }
}