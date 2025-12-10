import CountryView from "./CountryView"

const Country = ({countries, value, showCountryView}) => {
    if (!value) {
        return null
    }
    return (
        <div>
            {countries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : countries.length > 1 ? (
                countries.map(country => {
                return (
                <div key={country.cca3}> 
                    {country.name.common}
                    <button onClick={() =>showCountryView(country)}>
                        Show
                    </button> 
                </div>)}
            )) : countries.length == 1 ? (
                <CountryView country={countries[0]}/>
            ) : (
                <div>Invalid Search</div>
            )
            }
        </div>
    )
}

export default Country