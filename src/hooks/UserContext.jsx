import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({}); // Cria o contexto.

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({}); // Cria o estado do contexto.

    const putUserData = (userInfo) => {
        setUserInfo(userInfo)

        localStorage.setItem('devburguer:userData', JSON.stringify(userInfo))
    }

    const logout = () => {
        localStorage.removeItem('devburguer:userData')
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburguer:userData')

        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage))
        }
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider> // Retorna o contexto.
    )
}

export const useUser = () => {
    const context = useContext(UserContext); // Pega o contexto.

    if (!context) {
        throw new Error('useUser needs to be used inside a UserProvider');
    }
    return context
} 