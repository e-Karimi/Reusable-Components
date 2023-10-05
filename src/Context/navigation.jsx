/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {

        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }

    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    const contextValue = {
        setCurrentPath,
        currentPath,
        navigate
    }

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider