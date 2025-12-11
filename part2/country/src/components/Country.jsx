import CountryView from "./CountryView"
import { useState } from "react"

const Country = ({countries, value}) => {
    if (!value) {
        return null
    }

    const [selectedCountry, setSelectedCountry] = useState(null)

    
    return (
        <div>
            {countries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : countries.length > 1 ? (
                countries.map(country => {
                return (
                <div key={country.cca3}> 
                    {country.name.common}
                    <button onClick={() =>setSelectedCountry(country)}>
                        Show
                    </button> 
                </div>)}
            )) : countries.length == 1 ? (
                <CountryView country={countries[0]}/>
            ) : (
                <div>Invalid Search</div>
            )
            }
            {selectedCountry ? <CountryView country = {selectedCountry}/> :null}
        </div>
    )
}

export default Country