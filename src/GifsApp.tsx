import { useState } from 'react';
import { mockGifs } from './data/gifs.mock';
import { SearchBar } from "./shared/components/SearchBar"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';


const terms: string[] = ['Batman']


export const GifsApp = () => {

    const [previousTerm, setiPreviousTerm] = useState( terms );
    const handletermClick = ( term: string) => {
        console.log(term)
    }
  return (
    <>
        <CustomHeader title="Buscador de Gifs" subtitle="Descubre y comparte Gifs"/>

        <SearchBar title="Buscar" placeholder="Buscar Gifs" />


        <PreviousSearches 
            title="Busqueda Previa" 
            searches={ previousTerm }
            labelClicked={handletermClick} />

        <GifsList gifs={mockGifs} />

       
    </>
  )
}
