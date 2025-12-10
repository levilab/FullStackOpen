import { useState, useEffect } from "react";
import countryService from "./services/country"
import Country from "./components/Country";
import CountryView from "./components/CountryView";

const App = () => {

  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)


  useEffect(() => {
    countryService
      .getAll()
      .then(countries =>
        setCountries(countries)
      )},[])

  if (!countries) {
    return null
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const handleCountryView = (selectedCountry) => {
    setSelectedCountry(selectedCountry)
  }
  return (
    <div>
      <form>
        find countries <input value={value} onChange={handleInput} />
      </form>
      <Country countries={filteredCountries} value={value} showCountryView={handleCountryView}/>
      {selectedCountry ? <CountryView country = {selectedCountry}/> :null}
    </div>  
    
  )
}

export default App