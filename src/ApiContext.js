import React, { createContext, useState } from 'react';
import useFetch from './components/hooks/useFetch';

export const ApiContext = createContext()

const ApiContextProvider = ({ children }) => {

    const [charactersQuery, setCharactersQuery] = useState("a");
    const [comicsQuery, setComicsQuery] = useState("a");
    const [seriesQuery, setSeriesQuery] = useState("a");
  
    const { data: characters, isLoading: characterLoading } = useFetch(
      `${process.env.REACT_APP_API_URL}characters?nameStartsWith=${charactersQuery}${process.env.REACT_APP_APY_KEY}`
    );
  
    const {
      data: comics,
      isLoading: comicsLoading,
      error: comicsError,
    } = useFetch(
      `${process.env.REACT_APP_API_URL}comics?titleStartsWith=${comicsQuery}${process.env.REACT_APP_APY_KEY}`
    );
    const { data: series, isLoading: seriesLoading } = useFetch(
      `${process.env.REACT_APP_API_URL}series?titleStartsWith=${seriesQuery}${process.env.REACT_APP_APY_KEY}`
    );

    return (
        <ApiContext.Provider 
            value={{
                comics, 
                comicsLoading, 
                comicsError, 
                series, 
                seriesLoading, 
                characters, 
                characterLoading,
                charactersQuery,
                setComicsQuery,
                setSeriesQuery,
                setCharactersQuery,
                }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContextProvider;