interface Props {
    title: string,
    placeholder: string
}



export const SearchBar = ({ title, placeholder = 'Buscar' }: Props ) => {
  return (
    <div className="search-container">
        <input type="text" placeholder={ placeholder } />
        <button>{ title }</button>
    </div>
  )
}
