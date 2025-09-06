interface Props {
    title: string,
    searches: string[],
    labelClicked: (term: string) => void
}

export const PreviousSearches = ( { title, searches, labelClicked }: Props ) => {
  return (
    <div className="previous-searches">
        <h2>{ title}</h2>
        <ul className="previous-searches-list">
            {
                searches.map( (term) => (
                    <li key={term}
                        onClick={ () => labelClicked(term) }
                    >
                        { term }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
