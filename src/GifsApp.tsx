import { useState } from 'react';
import { mockGifs } from './data/gifs.mock';
import { SearchBar } from "./shared/components/SearchBar"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';
import { getGiphyByQuery } from './gifs/actions/get-gifs-by-query.action';
import { Gif } from './gifs/interfaces/gif-interface';


const terms: string[] = []

export const GifsApp = () => {
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

  return (
    <>
        <CustomHeader title="Buscador de Gifs" subtitle="Descubre y comparte Gifs"/>

        <SearchBar 
            title="Buscar" 
            placeholder="Buscar Gifs"
            onQuery={handleSearch} 
        />


        <PreviousSearches 
            title="Busqueda Previa" 
            searches={ previousTerms }
            labelClicked={handletermClick} />

        <GifsList gifs={gifs} />

       
    </>
  )
}
