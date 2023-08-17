import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const AppProvider = ({children}) => {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value;

        setSearch(searchValue);
    }

    const value = {
        handleSubmit,
        setSearch,
        search 
    }

    return <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}