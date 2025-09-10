import { useRef, useState } from "react";
import { Gif } from "../interfaces/gif-interface";
import { getGiphyByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {}


export const useGifs = ( terms: string[] = [] ) => {

    const [previousTerms, setPreviousTerms] = useState( terms );
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({})


    const handletermClick = async( term: string ) => {
      if ( gifsCache.current[term] ){
        setGifs(gifsCache.current[term])
        return;
      }
        const gifs = await getGiphyByQuery(term);
        setGifs(gifs);
        console.log({gifs})
        
    }

    const handleSearch = async( query: string ) => {
        query.trim().toLowerCase()
        if( query.length === 0 ) return;
        if( previousTerms.includes(query) ) return;
                
        setPreviousTerms( [ query, ...previousTerms].slice(0,7) )

        const gifs = await getGiphyByQuery(query);
        setGifs(gifs)
        gifsCache.current[query] = gifs;
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
