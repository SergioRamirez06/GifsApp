import { KeyboardEvent, useEffect, useState } from "react"


interface Props {
    title: string,
    placeholder: string
    onQuery: ( query: string ) => void
}



export const SearchBar = ({ title, placeholder = 'Buscar', onQuery }: Props ) => {

  const [query, setQuery] = useState('');
  useEffect(() => {

    const timeouId = setTimeout(() => {
      onQuery(query)
    }, 700);
  
    return () => {
      clearTimeout( timeouId );
    }
  }, [query, onQuery])
  

  const handleSearch =  () => {
    onQuery(query)
  }

  const handleKeyDown = ( event: KeyboardEvent<HTMLInputElement>) => {
    if( event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
        <input 
          type="text" 
          placeholder={ placeholder } 
          value={query}
          onChange={ (event) => setQuery( event.target.value ) }
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>{ title }</button>
    </div>
  )
}
