import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                 'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                 'x-rapidapi-key': 'e28710ed2fmsh0abd346f8024785p1e4d09jsn3631'
    }});
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);