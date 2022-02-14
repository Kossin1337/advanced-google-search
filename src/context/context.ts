import { createContext, useContext, useState } from "react";

const ResultContext = createContext<AppContextInterface | null>(null);
const baseURL: string = "https://google-search3.p.rapidapi.com/api/v1";

interface ApiCall<Response> {
  data: Response;
}

export interface AppContextInterface {
  results: [] | null;
  setResults: () => void;
  searchTerm: string | undefined;
  setSearchTerm: () => void;
  isLoading: boolean;
  getResults: () => void;
}

export const ResultContextProvider = ({ children }: any) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(children);

  /* type can be equal to for example: /videos, /search, /images */
  const getResults = async (type: string) => {
    setIsLoading(true);

    //possible security leak lookup .env
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US", // not sure about this, can delete later or check it out
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "859937fb6bmsh532cd3a75a7de1dp1f2c18jsn42ca5b129e28",
      },
    });

    const data: any = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);

    // return (
    //   <ResultContext.Provider
    //     value={{
    //       results
    //       setResults
    //       searchTerm
    //       setSearchTerm
    //       isLoading
    //       getResults
    //     }}
    //   >
    //   {children}
    //   </ResultContext.Provider>
    // );
  };
};

export const useResultContext = () => useContext(ResultContext);
