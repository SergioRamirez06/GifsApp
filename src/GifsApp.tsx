import { mockGifs } from './data/gifs.mock';
import { SearchBar } from "./shared/components/SearchBar"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';



export const GifsApp = () => {
  return (
    <>
        <CustomHeader title="Buscador de Gifs" subtitle="Descubre y comparte Gifs"/>

        <SearchBar title="Buscar" placeholder="Buscar Gifs" />


        <PreviousSearches title="Busqueda Previa" searches={['Goku', 'Batman', 'superman']} />

        <GifsList gifs={mockGifs} />

       
    </>
  )
}
