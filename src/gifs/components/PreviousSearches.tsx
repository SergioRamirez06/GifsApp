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
                searches.map( (searche) => (
                    <li key={searche}
                        onClick={ () => labelClicked(searche) }
                    >
                        { searche }
                    </li>
                ))
            }

        </ul>
    </div>
  )
}
