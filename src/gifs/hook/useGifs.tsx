import { useState } from "react";
import { Gif } from "../interfaces/gif-interface";
import { getGiphyByQuery } from "../actions/get-gifs-by-query.action";



export const useGifs = ( terms: string[] = [] ) => {
    const [previousTerms, setPreviousTerms] = useState( terms );
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handletermClick = ( term: string ) => {
        console.log({term})
    }

    const handleSearch = async( query: string ) => {
        query.trim().toLowerCase()
        if( query.length === 0 ) return;
        if( previousTerms.includes(query) ) return;
                
        setPreviousTerms( [ query, ...previousTerms].slice(0,7) )

        const gifs = await getGiphyByQuery(query);
        setGifs(gifs)
    }
  return {

    // ! value
    gifs,
    previousTerms,

    // !methodos
    handletermClick,
    handleSearch
  }
}
