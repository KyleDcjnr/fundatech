import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
})


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)


    useEffect(() => {
        //event listener for logout
        netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('logout event')
        })
        
        //event listener for login
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log('login event')
        })

        netlifyIdentity.on('init', (user) => {
            setUser(user)
            setAuthReady(true)
        })

        //initialize netlify identity instance
        netlifyIdentity.init()

        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
        
    }, [])

    const login = () => {
        netlifyIdentity.open()
    }

    const logout = () => {
        netlifyIdentity.logout()
    }

    const context = {user, login, logout, authReady}

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext