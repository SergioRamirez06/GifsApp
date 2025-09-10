import { SearchBar } from "./shared/components/SearchBar"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';
import { useGifs } from './gifs/hook/useGifs';

const terms: string[] = []

export const GifsApp = () => {

    const { gifs, handleSearch, handletermClick, previousTerms } = useGifs(terms)
    
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
